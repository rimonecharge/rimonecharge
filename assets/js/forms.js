/**
 * Rimone — contact / partner form handling.
 *
 * Any <form data-rimone-form> is intercepted, validated and delivered. Delivery
 * is tried in order:
 *
 *   1. Web3Forms API  — primary. Submissions are emailed to the inbox registered
 *                      at web3forms.com and archived in its dashboard. No
 *                      per-origin activation: localhost, 127.0.0.1, preview
 *                      servers and production all work identically.
 *   2. mailto:        — hands the visitor their own mail client with the message
 *                      pre-filled, so an enquiry is never silently lost if the
 *                      API is unreachable or misconfigured.
 *
 * SETUP (one-time): create a free account at web3forms.com with the inbox that
 * should receive enquiries, verify the email, then paste the access key into
 * WEB3FORMS_ACCESS_KEY below.
 *
 * The previous FormSubmit.co integration was removed: its per-origin activation
 * (keyed to host AND port) rejected submissions from loopback origins even after
 * activation clicks, and could never stay activated for preview servers that
 * pick a fresh port each run.
 */

(function () {
  'use strict';

  /* ---------- config ---------- */

  // Inbox enquiries are delivered to, and shown to visitors as the fallback
  // contact address. It does not have to match the Web3Forms account email.
  var RECIPIENT = 'info@rimonecharge.com';

  // Paste your access key from https://web3forms.com/ (Dashboard → Access Key).
  var WEB3FORMS_ACCESS_KEY = '8a8639fc-cd7e-42c5-94a1-7aea235761f1';

  var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

  /* ----------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var forms = document.querySelectorAll('form[data-rimone-form]');
    Array.prototype.forEach.call(forms, setupForm);
  });

  function setupForm(form) {
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('[type="submit"]');
    var defaultLabel = submitBtn ? submitBtn.innerHTML : 'Send';

    form.setAttribute('novalidate', 'novalidate');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setStatus(status, 'error', 'Please fill in all the required fields correctly.');
        return;
      }

      var fields = collectFields(form);
      var subject = form.getAttribute('data-subject') || 'New website enquiry';

      // Show a bot the same success it would see anyway, and send nothing.
      if (isSpam(form)) {
        form.reset();
        setStatus(status, 'success', 'Thanks — your message is on its way.');
        return;
      }

      setBusy(submitBtn, true, 'Sending…');
      setStatus(status, 'pending', 'Sending your message…');

      send(subject, fields)
        .then(function () {
          form.reset();
          toggleConditionalRows(form);
          setStatus(status, 'success', 'Thanks — your message is on its way. Our team will get back to you shortly.');
        })
        .catch(function (err) {
          // Surfaced for whoever is debugging delivery; visitors see the notice below.
          if (window.console) {
            console.warn('[rimone] form delivery failed:', err && err.message);
          }

          var link = mailtoLink(subject, fields);
          setStatus(
            status,
            'error',
            'We could not send that automatically. ' +
              '<a href="' + link + '">Click here to send it from your email app</a>, ' +
              'or write to us at <a href="mailto:' + RECIPIENT + '">' + RECIPIENT + '</a>.'
          );
        })
        .then(function () {
          setBusy(submitBtn, false, defaultLabel);
        });
    });

    // Keep the "Please specify" rows in sync with their select.
    var conditionals = form.querySelectorAll('[data-reveal-target]');
    Array.prototype.forEach.call(conditionals, function (select) {
      select.addEventListener('change', function () {
        toggleConditionalRows(form);
      });
    });
    toggleConditionalRows(form);
  }

  /* ---------- conditional "Others → please specify" rows ---------- */

  function toggleConditionalRows(form) {
    var selects = form.querySelectorAll('[data-reveal-target]');
    Array.prototype.forEach.call(selects, function (select) {
      var row = form.querySelector('#' + select.getAttribute('data-reveal-target'));
      if (!row) return;
      var input = row.querySelector('input, textarea');
      var show = select.value === select.getAttribute('data-reveal-when');

      row.hidden = !show;
      if (input) {
        input.required = show;
        if (!show) input.value = '';
      }
    });
  }

  /* ---------- gathering + sending ---------- */

  function collectFields(form) {
    var fields = [];
    var controls = form.querySelectorAll('input, select, textarea');

    Array.prototype.forEach.call(controls, function (control) {
      if (!control.name || control.type === 'submit' || control.disabled) return;
      if (control.name.charAt(0) === '_') return; // honeypot / backend directives

      var row = control.closest('[hidden]');
      if (row) return; // skip hidden "please specify" rows

      var value = control.value;
      if (!value) return;

      if (control.tagName === 'SELECT') {
        var opt = control.options[control.selectedIndex];
        if (opt) value = opt.textContent.trim();
      }

      fields.push({ label: labelFor(form, control), value: value });
    });

    return fields;
  }

  function labelFor(form, control) {
    var label = control.id ? form.querySelector('label[for="' + control.id + '"]') : null;
    if (label) return label.textContent.replace(/\*$/, '').trim();
    return control.getAttribute('placeholder') || control.name;
  }

  function payloadFor(subject, fields) {
    var payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subject,
      from_name: 'Rimone website'
    };

    fields.forEach(function (f) {
      payload[f.label] = f.value;
    });

    // Web3Forms uses the "email" field as the reply-to, so replies from the
    // inbox go straight back to the enquirer.
    var email = emailOf(fields);
    if (email) payload.email = email;

    return payload;
  }

  function send(subject, fields) {
    if (!WEB3FORMS_ACCESS_KEY) {
      return Promise.reject(new Error(
        'Web3Forms access key is not configured. ' +
          'Create a free account at https://web3forms.com, then paste the key ' +
          'into WEB3FORMS_ACCESS_KEY in assets/js/forms.js.'
      ));
    }

    var payload = payloadFor(subject, fields);

    return fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().catch(function () {
          throw new Error('unreadable response (HTTP ' + res.status + ')');
        });
      })
      .then(function (data) {
        // Web3Forms answers with {"success":true|false} plus a message.
        if (data.success !== true) {
          throw new Error(data.message || 'submission rejected');
        }
        return data;
      });
  }

  function emailOf(fields) {
    for (var i = 0; i < fields.length; i++) {
      if (/email/i.test(fields[i].label) && fields[i].value.indexOf('@') > -1) {
        return fields[i].value;
      }
    }
    return null;
  }

  // A bot filling the hidden decoy field marks the submission as spam.
  function isSpam(form) {
    var honey = form.querySelector('[name="_honey"]');
    return !!(honey && honey.value);
  }

  function mailtoLink(subject, fields) {
    var body = fields
      .map(function (f) {
        return f.label + ': ' + f.value;
      })
      .join('\n');

    return (
      'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body)
    );
  }

  /* ---------- UI helpers ---------- */

  function setStatus(el, state, html) {
    if (!el) return;
    el.className = 'form-status is-' + state;
    el.innerHTML = html;
    el.hidden = false;
  }

  function setBusy(btn, busy, label) {
    if (!btn) return;
    btn.disabled = busy;
    btn.innerHTML = label;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
})();

/**
 * Rimone — careers page: job listings, department filter and apply accordion.
 *
 * To post a role, add an entry to JOBS. To take one down, delete it or set
 * `open: false`. Department chips and every count are derived from this array,
 * so nothing else needs touching.
 */

(function () {
  'use strict';

  var DEPARTMENTS = {
    software: 'Software',
    businessdevelopment: 'Business Development',
    accounts: 'Accounts',
    legal: 'Legal',
    support: 'Customer Support',
    infrastructure: 'Infrastructure & Hardware'
  };

  var JOBS = [
    {
      title: 'Frontend React Developer',
      category: 'software',
      type: 'Part-time',
      location: 'Remote',
      stipend: '₹4,000 – ₹6,000 / month',
      deadline: '15 Apr 2026, 6:00 pm',
      open: true,
      applyLink: 'https://forms.gle/Uc8R22jZMmc2G7p36',
      summary:
        'Build and maintain our internal dashboard and customer-facing web interfaces in React.',
      description:
        '<h4>About the role</h4>' +
        '<p>As a Frontend Developer at Rimone Charge you will be instrumental in building and ' +
        'maintaining our internal dashboard and customer-facing web interfaces. You will develop ' +
        'web-based dashboards and tools using React.js, working with the design and backend teams ' +
        'to create intuitive features that enhance the EV charging experience for our users.</p>' +
        '<p>The ideal candidate is self-driven, detail-oriented and passionate about creating ' +
        'scalable, efficient and intuitive web applications. Effective communication and ' +
        'collaboration with the backend team is critical to designing the best solutions for our ' +
        'users, and you will have the chance to contribute to our mission of revolutionising ' +
        'electric vehicle charging.</p>' +

        '<h4>What we are looking for</h4>' +
        '<ul>' +
        '<li>Strong hands-on experience with React.js, Redux/Context and modern JS (ES6+)</li>' +
        '<li>Proficiency in Tailwind CSS for clean, responsive, scalable UI</li>' +
        '<li>Confidence with API integration, state management and form handling</li>' +
        '<li>Familiarity with websockets and real-time data updates</li>' +
        '<li>Experience with user access control systems and permission models</li>' +
        '</ul>' +

        '<h4>Part-time flexibility</h4>' +
        '<p>We understand the importance of work-life balance, so this is a part-time role. You ' +
        'will work 3–4 hours a day, roughly 80 hours a month, on hours entirely adaptable to your ' +
        'schedule and from wherever you choose.</p>' +

        '<h4>Stipend</h4>' +
        '<p>This is a paid role. The stipend is between ₹4,000 and ₹6,000, paid as per the task ' +
        'and shared with you before you start. This is your opportunity to impress our hiring team ' +
        'with your skills and become part of Team Rimone.</p>' +

        '<h4>How to apply</h4>' +
        '<p>If this role aligns with your skills and aspirations, and you are excited about ' +
        'contributing to sustainable mobility, we encourage you to apply. Once we review your ' +
        'submission, the Rimone team will get in touch with shortlisted candidates to discuss the ' +
        'next phase of the selection process.</p>'
    },

    {
      title: 'Sales and Marketing Intern',
      category: 'businessdevelopment',
      type: 'Part-time / Internship',
      location: 'Delhi NCR',
      stipend: 'Monthly stipend + travel allowance + deal bonus',
      open: true,
      applyLink: 'https://forms.gle/bodPrAJdFf7BYJ3M7',
      summary:
        'Grow our EV charging network across Delhi NCR by finding and closing new site partnerships.',
      description:
        '<h4>About the role</h4>' +
        '<p>Rimone Charge is a Charge Point Operator providing charging solutions for 4-wheeler ' +
        'electric vehicles, dedicated to driving India’s EV revolution. We are looking for ' +
        'dynamic, motivated people to join our team and spearhead the expansion of our EV charging ' +
        'infrastructure across the Delhi NCR region.</p>' +

        '<h4>Key responsibilities</h4>' +
        '<ul>' +
        '<li>Generate leads and prospect clients interested in hosting 4W EV charging stations</li>' +
        '<li>Research and prioritise target locations for EV charging partnerships</li>' +
        '<li>Initiate and maintain client communication by phone, email and in person</li>' +
        '<li>Visit potential sites to understand requirements, present our solutions and negotiate terms</li>' +
        '<li>Develop sales strategies that guide clients through the funnel to a closed deal</li>' +
        '<li>Work with the operations team on smooth installation and activation at client sites</li>' +
        '<li>Provide ongoing support, addressing client queries about our products and services</li>' +
        '</ul>' +

        '<h4>Requirements</h4>' +
        '<ul>' +
        '<li>Minimum bachelor’s degree in Business Administration, Marketing, Finance or related</li>' +
        '<li>Strong communication and interpersonal skills for building long-term relationships</li>' +
        '<li>Ability to work independently and drive results in a fast-paced environment</li>' +
        '<li>Prior sales or customer-facing experience is a plus, but not mandatory</li>' +
        '<li>A passion for sustainability and clean technology is highly desirable</li>' +
        '<li>Final-year MBA students are encouraged to apply</li>' +
        '</ul>' +

        '<h4>What we offer</h4>' +
        '<ul>' +
        '<li>Part-time role with a monthly stipend</li>' +
        '<li>Flexible work that fits your own schedule</li>' +
        '<li>Travel allowances paid separately, based on actual expenses</li>' +
        '<li>A bonus for every deal you close</li>' +
        '</ul>' +

        '<h4>How to apply</h4>' +
        '<p>Whether you are a final-year MBA student looking for an internship or a professional ' +
        'who wants to challenge themselves, if you are excited about contributing to sustainable ' +
        'mobility we encourage you to apply.</p>'
    }
  ];

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var listEl = document.getElementById('job-list');
    if (!listEl) return;

    var filterEl = document.getElementById('job-filters');
    var countEl = document.getElementById('total-count');
    var labelEl = document.getElementById('total-label');
    var emptyEl = document.getElementById('job-empty');

    var openJobs = JOBS.filter(function (job) {
      return job.open !== false;
    });

    buildFilters(filterEl, openJobs, function (category) {
      render(category);
    });

    render('all');

    function render(category) {
      var jobs = openJobs.filter(function (job) {
        return category === 'all' || job.category === category;
      });

      countEl.textContent = jobs.length;
      labelEl.textContent = jobs.length === 1 ? 'opening' : 'openings';
      emptyEl.hidden = jobs.length > 0;

      listEl.innerHTML = '';
      jobs.forEach(function (job, i) {
        listEl.appendChild(buildCard(job, i));
      });
    }
  }

  /* ---------- department chips ---------- */

  function buildFilters(container, jobs, onSelect) {
    if (!container) return;

    // Only departments that actually have an opening get a chip.
    var counts = {};
    jobs.forEach(function (job) {
      counts[job.category] = (counts[job.category] || 0) + 1;
    });

    var chips = [{ key: 'all', label: 'All openings', count: jobs.length }];
    Object.keys(DEPARTMENTS).forEach(function (key) {
      if (counts[key]) {
        chips.push({ key: key, label: DEPARTMENTS[key], count: counts[key] });
      }
    });

    container.innerHTML = '';
    chips.forEach(function (chip, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'job-filter' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      btn.innerHTML =
        escapeHtml(chip.label) + ' <span class="job-filter-count">' + chip.count + '</span>';

      btn.addEventListener('click', function () {
        Array.prototype.forEach.call(container.children, function (el) {
          el.classList.remove('active');
          el.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        onSelect(chip.key);
      });

      container.appendChild(btn);
    });
  }

  /* ---------- one expandable job ---------- */

  function buildCard(job, index) {
    var id = 'job-panel-' + index;

    var card = document.createElement('article');
    card.className = 'job-card';

    var head = document.createElement('button');
    head.type = 'button';
    head.className = 'job-head';
    head.setAttribute('aria-expanded', 'false');
    head.setAttribute('aria-controls', id);

    var meta = [DEPARTMENTS[job.category] || job.category, job.type, job.location]
      .filter(Boolean)
      .map(function (m) {
        return '<span class="job-tag">' + escapeHtml(m) + '</span>';
      })
      .join('');

    head.innerHTML =
      '<span class="job-head-main">' +
      '<span class="job-title">' + escapeHtml(job.title) + '</span>' +
      (job.summary ? '<span class="job-summary">' + escapeHtml(job.summary) + '</span>' : '') +
      '<span class="job-tags">' + meta + '</span>' +
      '</span>' +
      '<span class="job-chevron" aria-hidden="true"></span>';

    var panel = document.createElement('div');
    panel.className = 'job-panel';
    panel.id = id;
    panel.hidden = true;

    var facts = '';
    if (job.stipend || job.deadline) {
      facts = '<dl class="job-facts">';
      if (job.stipend) facts += '<dt>Compensation</dt><dd>' + escapeHtml(job.stipend) + '</dd>';
      if (job.deadline) facts += '<dt>Apply by</dt><dd>' + escapeHtml(job.deadline) + '</dd>';
      facts += '</dl>';
    }

    panel.innerHTML =
      '<div class="job-panel-inner">' +
      facts +
      '<div class="job-description">' + job.description + '</div>' +
      '<a class="btn btn-primary job-apply" href="' + escapeAttr(job.applyLink) + '"' +
      ' target="_blank" rel="noopener">Apply for this role <i class="bi bi-box-arrow-up-right"></i></a>' +
      '</div>';

    head.addEventListener('click', function () {
      var isOpen = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      card.classList.toggle('is-open', !isOpen);
      panel.hidden = isOpen;
    });

    card.appendChild(head);
    card.appendChild(panel);
    return card;
  }

  /* ---------- helpers ---------- */

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, '&quot;');
  }
})();

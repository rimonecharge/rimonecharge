/* Client form JS */

// Funtion to send Contact Form Request 
src = "https://smtpjs.com/v3/smtp.js"
function sendEmail() {
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let email = document.getElementById("email").value;
	let phone_no = document.getElementById("phone_no").value;
	let message = document.getElementById("message").value;

	let body = "First Name : " + first_name + "<br/> Last Name : " + last_name + "<br/> Email :" + email + "<br/> Phone Number :" + phone_no +
		"<br/> Message : " + message;

	console.log(body);

	Email.send({
		SecureToken: "1a2c56b7-ef7d-4e23-84eb-2e3e5ee100e7",
		To: "info@rimonecharge.com",
		From: "rimtest246@gmail.com",
		Subject: "New entry from Contact Us form: ",
		Body: body
	}).then(
		message => alert("Sent Successfully!")
	);
}


// Funtion to send Client Email Request 
src = "https://smtpjs.com/v3/smtp.js"
function sendclientEmail() {
	let full_name = document.getElementById("full_name").value;
	let email = document.getElementById("email").value;
	let country = document.getElementById("country").value;
	let phone_no = document.getElementById("phone_no").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let location_type = document.getElementById("location_type").value;
	let enquiry_type = document.getElementById("enquiry_type").value;
	let message = document.getElementById("message").value;
	let otherEnquiryInput = document.getElementById("other-enquiry-text");
	let otherLocationInput = document.getElementById("other-location-text");

	

	let body = "Full Name : " + full_name + "<br /> Email : " + email + "<br /> Country : " + country + "<br /> Phone Number : " + phone_no +
		"<br /> Address : " + address + "<br /> City : " + city + "<br /> State : " + state + 
		"<br /> Location type : " + location_type + "<br /> Other Location : " + otherLocationInput.value +
		"<br /> Enquiry Type : " + enquiry_type + "<br /> Other Enquiry : " + otherEnquiryInput.value +
		"<br /> Message : " + message;

	console.log(body);

	Email.send({
		SecureToken: "1a2c56b7-ef7d-4e23-84eb-2e3e5ee100e7",
		To: "info@rimonecharge.com",
		From: "rimtest246@gmail.com",
		Subject: "New entry from Client Us form : ",
		Body: body,
	}).then(
		message => alert("Request Sent Successfully!")
	);
}


//For the others dropdown option in location-type & enquiry_type

//location_type
function showLocationTextbox() {
	var selectBox = document.getElementById("location_type");
	var otherOptionDiv = document.getElementById("other-location-option");
	var otherOptionInput = document.getElementById("other-location-text");
	
	if (selectBox.value === "Other Location") {
	  otherOptionDiv.style.display = "block";
	  otherOptionInput.required = true;
	} else {
	  otherOptionDiv.style.display = "none";
	  otherOptionInput.required = false;
	}
  }

//enquiry-type

function showEnquiryTextbox() {
	var selectBox = document.getElementById("enquiry_type");
	var otherOptionDiv = document.getElementById("other-enquiry-option");
	var otherOptionInput = document.getElementById("other-enquiry-text");
	
	if (selectBox.value === "Other Enquiry") {
	  otherOptionDiv.style.display = "block";
	  otherOptionInput.required = true;
	} else {
	  otherOptionDiv.style.display = "none";
	  otherOptionInput.required = false;
	}
  }




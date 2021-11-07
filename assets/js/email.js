function sendMail() {
	let data = $(".contactForm").serializeArray();
	let subject = "New Customer enquery : " + data[0]["value"] + " " + data[1]["value"];
	let body = "Email: " + data[2]["value"] + 
	" Phone number: " + data[3]["value"] + 
	" Company Name: " + data[4]["value"] + 
	" Message: " + data[5]["value"];
	
	Email.send({
	Host: "smtp.gmail.com",
	Username: "rimtest246@gmail.com",
	Password: "Test@123",
	To: "rimonecharge@gmail.com",
	From: "rimtest246@gmail.com",

	Subject: subject,
	Body: body,
	})
	.then(function () {
	  alert("mail sent successfully")
	});
	return false;
}


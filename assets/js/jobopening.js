//Functionality for Job Openings Section

$(document).ready(function () {

    const jobData = [
        
		//This is the space to add details about the opeing, 
		
		
		//Job Posting 1
		
	    //{ title: "Senior Accountant", 
	    //category: "accounts", 
		//description: "In return for your valuable contributions, we will be offering a monthly compensation for this part-time role.", 
		// <br> is used to break the line in the textcontent
		//applyLink: "#" 
	    //},
      
	    //Job Posting 2
		
	    //  { title: "Mobile app Developer", 
	    // category: "software", 
		// description: "Job Description: <br>As a Mobile App Developer at Rimone Charge, you will be at the forefront of enhancing our user experience through cutting-edge app development. Your responsibilities will include designing, coding, testing, and debugging mobile applications to ensure a smooth and user-friendly interface. You will have the chance to contribute to our mission of revolutionizing electric vehicle charging solutions. <br><br>Daily Tasks: <br>Collaborate with the development team to create intuitive and efficient mobile applications.<br>Participate in brainstorming sessions to conceptualize new app features and enhancements.<br>Write clean, maintainable, and efficient code while adhering to industry best practices. <br>Test and debug applications to ensure a flawless user experience.<br>Stay up-to-date with the latest mobile app trends, technologies, and developments. <br><br>Part-Time Flexibility: <br>We understand the importance of work-life balance, which is why we are offering this position as a part-time role. You will have the flexibility to work 2-3 hours a day, totaling approximately 80 hours a month. The working hours are entirely adaptable to your schedule, and you have the freedom to work from anywhere you choose. This setup allows you to integrate your professional commitments seamlessly with your lifestyle.<br><br>Compensation:<br>In return for your valuable contributions, we will be offering a monthly compensation for this part-time role.If you find this role aligning with your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply.<br><br>Deadline:<br>Please make sure to fill out the form before 31st Aug 2023. This will help us gather more information about your experience and availability. Once we review the submissions, we will be in touch to discuss the next phase of the selection process.", 
		// applyLink: "#"
        // },
      
	    //Job Posting 3
	
      //{ title: "Flutter Developer",
      // category: "software", 
	  //	   description:" Job Description: <br>As a Flutter Developer at Rimone Charge, you will play a key role in developing mobile application for our EV charging solutions. You will work with the front-end development team to create intuitive and user-friendly mobile app that enhances the EV charging experience. Your expertise in Flutter, Android Studio, and Xcode will be essential in delivering high-quality applications that meet our users' needs. Effective communication and collaboration with the backend development team and other team members are critical for designing and developing the best solutions for our users.You will have the chance to contribute to our mission of revolutionizing electric vehicle charging solutions. <br><br>Daily Tasks: <br>Develop and maintain mobile applications using Flutter for both Android and iOS platforms. <br>Collaborate with the development team to ensure seamless integration and functionality.<br>Implement user interfaces and experiences that are easy to use and visually appealing.<br>Perform code reviews and provide feedback on other team members' code.<br>Test and debug applications to ensure a flawless user experience.<br>Stay up-to-date with the latest mobile app trends, technologies, and developments. <br><br>Part-Time Flexibility: <br>We understand the importance of work-life balance, which is why we are offering this position as a part-time role. You will have the flexibility to work 3-4 hours a day, totaling approximately 80 hours a month. The working hours are entirely adaptable to your schedule, and you have the freedom to work from anywhere you choose. This setup allows you to integrate your professional commitments seamlessly with your lifestyle.<br><br>Compensation:<br>In return for your valuable contributions, we will be offering a compensation of Rs. 3-4k per month for this part-time role.If you find this role aligning with your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply.<br><br>Deadline:<br>Please make sure to fill out the form before 02nd Jan 2024. This will help us gather more information about your experience and availability. Once we review the submissions, we will be in touch to discuss the next phase of the selection process.", 
		//   applyLink: "https://forms.gle/iYTPvEpjHxgzC4qs6" 
	    // },
	  { title: "Frontend developer",
    	 category: "software", 
		 description:" Job Description: <br>As a Frontend Developer at Rimone Charge, you will be working on a very specific task of developing and integrating leaflet maps with our frontend projects like mobile application and web dashboard for our EV charging solutions. You will work with the front-end development team to create intuitive and user-friendly maps feature in our mobile app that enhances the EV charging experience. Your expertise in Flutter, Android Studio, and Xcode will be essential in delivering high-quality applications that meet our users' needs. Effective communication and collaboration with the backend development team and other team members are critical for designing and developing the best solutions for our users. You will have the chance to contribute to our mission of revolutionizing electric vehicle charging solutions.  <br><br>Key Responsibilities: <br>UI designing and integrating maps feature for the web dashboard and mobile app. <br><br>Part-Time Flexibility: <br>We understand the importance of work-life balance, which is why we are offering this position as a part-time role. You will have the flexibility to work 3-4 hours a day, totaling approximately 80 hours a month. The working hours are entirely adaptable to your schedule, and you have the freedom to work from anywhere you choose. This setup allows you to integrate your professional commitments seamlessly with your lifestyle.<br><br>Stipend:<br>The stipend will be paid as per the task and will be shared with you before starting the role. This is your opportunity to impress our hiring team with your skills and work to be part of Team Rimone. <br><br>If you are a coding enthusiast and have some spare time to earn good extra income or a professional who wants to challenge themselve to learn and grow your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply. <br>The application is open till 6:00pm of 10th May 2024", 
		 applyLink: "https://forms.gle/7iBVChnovWWWDyyb9" 
	     },
	  
		{ title: "Sales And Marketing Intern",
    	 category: "businessdevelopment", 
		 description:" Job Description: <br>Rimone Charge is a Charge Point Operator providing charging solutions for 4W Electric vehicles, dedicated to driving India's electric vehicle revolution. We seek dynamic and motivated Interns to join our team and spearhead expanding our EV charging infrastructure across various locations across Delhi NCR region. <br><br>Key Responsibilities: <br>- Generate leads and prospect potential clients interested in setting up EV charging stations for 4W EVs at their locations. <br>- Conduct in-depth research to identify and prioritize target locations for EV charging partnerships.<br>- Initiate and maintain regular communication with clients through phone calls, emails, and in-person meetings.<br>- Visit potential client locations to understand their requirements, present our EV charging solutions, and negotiate partnership terms.<br>- Develop and implement effective sales strategies to engage clients and guide them through the sales funnel towards finalizing deals. <br>- Collaborate closely with the operations team to ensure smooth installation and activation of EV charging stations at client locations. Provide ongoing support and assistance to clients, addressing any queries or concerns they may have regarding our products and services.    <br><br>Requirement: <br>- Minimum Bachelor's degree in Business Administration, Marketing, Finance or a related field.<br>- Strong communication and interpersonal skills, building long-term business relationships with clients.<br>- Proven ability to work independently and drive results in a fast-paced environment.<br>- Prior experience in sales or customer-facing roles is a plus but not mandatory.<br>- Passion for sustainability and clean technology is highly desirable.<br>- Final year MBA students are encouraged to apply.<br><br>Location:<br>Delhi NCR <br><br>Compensation:<br>- Fixed salary of Rs. 3000 per month.<br>- Travel allowances will be provided separately based on actual travel expenses incurred.<br>- A bonus will be provided for closing a deal. <br><br>If you are a final year MBA student looking to have an internship or a professional who wants to challenge themselve to learn and grow your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply. The application is open till 6:00pm of 10th May 2024", 
		 applyLink: "https://forms.gle/ueS78ptfnXkfuBX59" 
	     },
	  
	     { title: "Technician",
    	 category: "infrastructure", 
		 description:" Job Description: <br>As a Technician at Rimone Charge, you will play a crucial role in onsite works of operations and maintainance of our technology infrastructure. Your responsibilities will include ensuring proper delivery and installation of AC and DC fast chargers on the location. Conducting a test charging session and by coordinating with Charger Network Management Team, integrating charger with Rimone backend for seamless charging operations. You need to travel to different location on requirement basis and resolving any technical and hardware issues on site if there may be any. <br><br>Requirement: <br>Technician should be aware of all the basic electrical knowdledge of wires, cables, connections and suppy working. Must have an experience in working with LT and HT cable connections of atleast 2 year. Candidate should have their own toolkit which must include hammer drill, screwdrivers, pliers, multimeter etc. <br><br>Location:<br>Patiala, Punjab <br><br>Compensation:<br>In return for your valuable contributions, we will be offering a work based compensation for role. The travel allowances will be given seperatly. If you find this role aligning with your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply. You can drop your message on the contactus page or directly call us at our customer support number.", 
		 applyLink: "https://rimonecharge.com/contactus.html" 
	     },

    ];
  
    function updateJobList(category) {
      const filteredJobs = jobData.filter(
        (job) => category === "all" || job.category === category
      );
      const jobList = document.getElementById("job-list");
      jobList.innerHTML = "";
      filteredJobs.forEach((job) => {
        const li = document.createElement("li");
  
        const jobTitle = document.createElement("div");
        jobTitle.classList.add("job-title");
        jobTitle.textContent = job.title;
  
        const jobAccordion = document.createElement("div");
        jobAccordion.classList.add("job-accordion");
  
        const jobDescription = document.createElement("div");
        jobDescription.classList.add("job-description");
        jobDescription.innerHTML = job.description;
  
        const applyButton = document.createElement("a");
        applyButton.classList.add("apply-button");
        applyButton.textContent = "Apply";
        applyButton.href = job.applyLink;
  
        jobAccordion.appendChild(jobDescription);
        jobAccordion.appendChild(applyButton);
  
        li.appendChild(jobTitle);
        li.appendChild(jobAccordion);
  
        jobList.appendChild(li);
  
        // Toggle accordion on job title click
        jobTitle.addEventListener("click", function () {
          jobAccordion.classList.toggle("active");
        });
      });
      document.getElementById("total-count").textContent = filteredJobs.length;
    }
  
    $(".department-list li").click(function () {
      const selectedCategory = $(this).data("category");
      updateJobList(selectedCategory);
    });
  
    updateJobList("all");
  });
  
  
//Slider Functionlatiy
    $(document).ready(function() {
        // Initialize Owl Carousel for the section
        $(".owl-carousel").owlCarousel({
            items: 4, // Default number of items
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 2 // On phones, display 2 items
                },
                768: {
                    items: 3 // On tablets, display 3 items
                },
                992: {
                    items: 4 // On larger screens, display 4 items (default)
                }
            }
        });
    });


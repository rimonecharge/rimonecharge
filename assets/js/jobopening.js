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
	  
	    { title: "Front End Developer",
    	 category: "software", 
		 description:" Job Description: <br>As a Front end Developer at Rimone Charge, you will be working at the forefront of enhancing our user experience through cutting-edge app development. Your responsibilities will include designing, coding, testing, and debugging mobile applications to ensure a smooth and user-friendly interface. You will have the chance to contribute to our mission of revolutionizing electric vehicle charging solutions. <br><br>Daily Tasks: <br>Collaborate with the development team to create intuitive and efficient mobile applications. <br>Need to have good knowledge and skills to use app development tools like flutter, android studio or X Code.<br>Participate in brainstorming sessions to conceptualize new app features and enhancements.<br>Write clean, maintainable, and efficient code while adhering to industry best practices. <br>Test and debug applications to ensure a flawless user experience.<br>Stay up-to-date with the latest mobile app trends, technologies, and developments. <br><br>Part-Time Flexibility: <br>We understand the importance of work-life balance, which is why we are offering this position as a part-time role. You will have the flexibility to work 3-4 hours a day, totaling approximately 80 hours a month. The working hours are entirely adaptable to your schedule, and you have the freedom to work from anywhere you choose. This setup allows you to integrate your professional commitments seamlessly with your lifestyle.<br><br>Compensation:<br>In return for your valuable contributions, we will be offering a compensation of Rs. 3-4k per month for this part-time role.If you find this role aligning with your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply.<br><br>Deadline:<br>Please make sure to fill out the form before 15th Nov 2023. This will help us gather more information about your experience and availability. Once we review the submissions, we will be in touch to discuss the next phase of the selection process.", 
		 applyLink: "https://forms.gle/CV3RvwycHfNDh8LSA" 
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


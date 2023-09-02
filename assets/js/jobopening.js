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
	  
	    // { title: "Backend Developer",
    	// category: "software", 
		// description:" Job Description: <br>As a Backend Developer at Rimone Charge, you will play a crucial role in enhancing our technology infrastructure. Your responsibilities will include developing, testing, and maintaining the backend of our systems, ensuring they run smoothly and efficiently. Your expertise will contribute directly to the seamless experience we provide to our customers in the field of electric vehicle charging.  <br><br>Part-Time Opportunity: <br>We understand the importance of work-life balance, which is why we are offering this position as a part-time role. You will have the flexibility to work 2-3 hours a day, totaling approximately 80 hours a month. The working hours are entirely adaptable to your schedule, and you have the freedom to work from anywhere you choose. This setup allows you to integrate your professional commitments seamlessly with your lifestyle.<br><br>Compensation:<br>In return for your valuable contributions, we will be offering a monthly compensation for this part-time role.If you find this role aligning with your skills and aspirations, and if you are excited about contributing to the growth of sustainable mobility solutions, we encourage you to Apply.<br><br>Deadline:<br>Please make sure to fill out the form before 31st Aug 2023. This will help us gather more information about your experience and availability. Once we review the submissions, we will be in touch to discuss the next phase of the selection process.", 
		// applyLink: "https://forms.gle/TSazztX3XZQ3DinL9" 
	    // },

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


//Slider Functionlatiy
        $(document).ready(function () {
            $(document).ready(function(){
                $('.slick-carousel').slick({
                    autoplay: true,
                    autoplaySpeed: 2000, // Adjust the speed as needed
                    dots: false,
                    arrows: false // Show navigation dots
                });
            });
        });

        $(document).ready(function () {

    // Pagination logic
    var currentPage = 1;
    var totalPages = $(".page").length;

    $(".next-page").click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    $(".prev-page").click(function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    function showPage(page) {
        $(".page").hide();
        $(".page-" + page).show();
        $(".page-number").text("Page " + page);
    }

    showPage(currentPage);
});

// PopUp for Cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const popupContainer = document.querySelector('.popup-container');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Show the popup
            const popup = document.createElement('div');
            popup.classList.add('popup');

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close-button');
            closeBtn.innerHTML = '&times;'; // Times symbol (X) for close button
            closeBtn.addEventListener('click', () => {
                // Close the popup
                popupContainer.style.display = 'none';
                popupContainer.innerHTML = ''; // Remove popup content
            });

            popup.appendChild(closeBtn);

            // Customize the popup content for each card
            let cardData = {}; // Replace with your card-specific data
            // Example: Get card-specific data based on index
            if (index === 0) {
                cardData = {
                    title: 'Card 1 Title',
                    description: 'This is the detailed information about Card 1.',
                };
            } else if (index === 1) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            } else if (index === 1) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            } else if (index === 3) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            } else if (index === 4) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            } else if (index === 5) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            } else if (index === 6) {
                cardData = {
                    title: 'Card 2 Title',
                    description: 'This is the detailed information about Card 2.',
                };
            }
            // Add card-specific data to the popup content
            const popupContent = document.createElement('div');
            popupContent.innerHTML = `<h3>${cardData.title}</h3><p>${cardData.description}</p>`;
            popup.appendChild(popupContent);

            // Display the popup
            popupContainer.appendChild(popup);
            popupContainer.style.display = 'flex';
        });
    });
});


// Add this JavaScript code to handle card scrolling
// JavaScript code to handle card scrolling
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    prevButton.addEventListener('click', function () {
        cardContainer.scrollBy({
            left: -cardContainer.clientWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function () {
        cardContainer.scrollBy({
            left: cardContainer.clientWidth,
            behavior: 'smooth'
        });
    });
});





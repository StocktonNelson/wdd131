const mainPageContent = [

    {
        title: "The Hawaii Temple",
        description: "Visiting the Hawaii Temple was an awe-inspiring experience. The serene atmosphere and beautiful architecture left a lasting impression.",
        img: "images/Hawaii_Temple.webp",
        imgText: "Hawaii Temple"
    },

    {
        title: "Polynesian Cultural Center",
        description: "Exploring the Polynesian Cultural Center was an unforgettable journey through diverse cultures. The performances and exhibits were truly captivating.",
        img: "images/test.webp",
        imgText: "Polynesian Cultural Center"
    }
];

const childPageContent = [
    {
        title: "Randbow Drive-in",
        description: "The place is preety interesting but the food was fine. however, if you get a normal burger then the bun will be 3 times bigger then the patty it self. This make look like just a bun then burger.",
        rating: "⭐⭐⭐",
        img: "images/rainbow.webp",
        imgText: "Tropical Paradise Restaurant"
    },
    {
        title: "Gateway Buffet",
        description: "This is part of the Polynesian Cultural Center and was amazing going in there. The place was very big and has so much food that i can't keep track how much iwas etaing in there. Also the food is very high quility and was made with care in made. Also the first time having desert be made at our table by cheifs that enjoy working there. Must go place in Hawaii.",
        rating: "⭐⭐⭐⭐⭐",
        img: "images/gateway-buffet.jpeg",
        imgText: "Sunset Beach"
    },
    {
        title: "Dole Pineapple Plantaion",
        description: "When going here to get some dessert, it was the most expensive place to get some ice cream. The food there cost $10 for a small amount of ice cream and $30 for real food. I don't recommend people here for the fun but only explore the history of the place.",
        rating: "⭐⭐",
        img: "images/dole-plantation.webp",
        imgText: "Diamond Head Trail"
    }
]


document.addEventListener('DOMContentLoaded', function () {
    const bodyClass = document.body.classList;

    // Logic for the main index.html page
    if (bodyClass.contains('index')) {
        const mainElement = document.querySelector('main');

        mainPageContent.forEach((content, index) => {
            const sectionElement = document.createElement('section');

            // Assign class based on even or odd index
            if (index % 2 === 0) {
                sectionElement.classList.add('first-section');
            } else {
                sectionElement.classList.add('second-section');
            }

            sectionElement.innerHTML = `
                <h2>${content.title}</h2>
                <p>${content.description}</p>
                <img src="${content.img}" alt="${content.imgText}" style="width: 750px; height: 750px;">
            `;

            mainElement.appendChild(sectionElement);
        });
    }

    // Logic for the child-index.html page
    if (bodyClass.contains('child-index')) {
        const mainElement = document.querySelector('main');

        childPageContent.forEach((content) => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('child-section');

            sectionElement.innerHTML = `
                <div class="text-content">
                    <h2>${content.title}</h2>
                    <p>${content.description}</p>
                    <p>Rating: ${content.rating}</p>
                </div>
                <img src="${content.img}" alt="${content.imgText}">
            `;

            mainElement.appendChild(sectionElement);
        });
    }

    const body = document.body;
    const darkModeButton = document.querySelector('nav a:nth-child(3)'); // Assuming the "Dark mode" button is the second link

    // Toggle dark mode
    darkModeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        body.classList.toggle('dark-mode'); // Toggle the dark-mode class

        // Update the button text
        if (body.classList.contains('dark-mode')) {
            darkModeButton.textContent = 'Light mode';
        } else {
            darkModeButton.textContent = 'Dark mode';
        }
    });
});





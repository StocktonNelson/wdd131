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
        title: "Tropical Paradise Restaurant",
        description: "A delightful dining experience with a fusion of tropical flavors. The ambiance and service were exceptional.",
        rating: "⭐⭐⭐⭐⭐",
        img: "https://picsum.photos/200/300",
        imgText: "Tropical Paradise Restaurant"
    },
    {
        title: "Sunset Beach",
        description: "Watching the sunset at Sunset Beach was a breathtaking experience. The vibrant colors and peaceful waves created a perfect moment.",
        rating: "⭐⭐⭐⭐",
        img: "https://picsum.photos/200/300",
        imgText: "Sunset Beach"
    },
    {
        title: "Hiking the Diamond Head Trail",
        description: "The hike up Diamond Head Trail was challenging but rewarding. The panoramic views from the top were absolutely stunning.",
        rating: "⭐⭐⭐⭐⭐",
        img: "https://picsum.photos/200/300",
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





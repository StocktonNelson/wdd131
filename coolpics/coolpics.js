const figureImages = document.querySelectorAll('figure img'); // Select all images

function updateImages() {
    const width = window.innerWidth; // Get window width
    
    if (width <= 700 && width > 500) { // If width is between 500-700px
        figureImages.forEach(img => {
            img.src = 'img/norris-sm.jpeg'; // Use small image
        });
    } else {
        figureImages.forEach(img => {
            img.src = 'img/norris-full.jpeg'; // Use full image
        });
    }
}

// Check on initial load
updateImages();

// Check when window is resized
window.addEventListener('resize', updateImages);

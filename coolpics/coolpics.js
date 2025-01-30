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

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function closeViewer() {
    document.querySelector('.viewer').remove();
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const img = event.target;
    // get the src attribute from that element and 'split' it on the "-"
    const src = img.getAttribute('src');
    const parts = src.split('-');
    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = parts[0] + '-full.jpeg';
    // insert the viewerTemplate into the top of the body element
    const viewerHTML = viewerTemplate(newSrc, img.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

// Check on initial load
updateImages();
document.querySelector('.gallary').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') { 
        viewHandler(event);
    }
});

// Check when window is resized
window.addEventListener('resize', updateImages);

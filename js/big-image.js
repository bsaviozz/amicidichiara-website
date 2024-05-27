// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.getElementsByClassName('close')[0];

// Add click event to all thumbnails
document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

// Close the lightbox when the user clicks on the 'x' button
close.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when the user clicks anywhere outside of the image
lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

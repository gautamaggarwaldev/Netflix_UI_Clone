const track = document.querySelector('.mg');
const prevBtn = document.getElementById('control_prev');
const nextBtn = document.getElementById('control_next');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.mg img').length;
const slidesToShow = 4; // Display 4 images at a time
const slideWidth = track.offsetWidth / slidesToShow; // Calculate width of each image

// Function to update the position of the track
function updateSlidePosition() {
    const transformValue = -(currentSlide * slideWidth * slidesToShow); // Move by the width of the visible images
    track.style.transform = `translateX(${transformValue}px)`; // Apply the translation
}

// Move to the next slide
nextBtn.addEventListener('click', () => {
    if (currentSlide < Math.floor(totalSlides / slidesToShow)) {
        currentSlide++;
        updateSlidePosition();
    }
});

// Move to the previous slide
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});

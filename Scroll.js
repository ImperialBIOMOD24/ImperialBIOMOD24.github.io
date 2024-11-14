// Select all sections and store them in an array
const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0; // Start at the first section

// Function to scroll to a specific section
function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Event listener for mouse wheel scroll
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    } else {
        // Scroll up
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }
});

// Optional: Reset scroll position on page load
window.addEventListener('load', () => {
    currentSectionIndex = 0;
    scrollToSection(currentSectionIndex);
});

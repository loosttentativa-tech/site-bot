// Intersection Observer Animation Example

// Function to add intersection observer
function createObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add your animation class here
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const elementsToAnimate = document.querySelectorAll('.observe-me');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Initialize the observer when the DOM is loaded
document.addEventListener('DOMContentLoaded', createObserver);

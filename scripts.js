


document.addEventListener("DOMContentLoaded", function () {
    const typedOutElements = document.querySelectorAll('.typed-out');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkElements() {
        typedOutElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animation = 'none'; // Reset any existing animation to ensure it can re-run
                setTimeout(() => {
                    element.style.animation = 'typing 3s steps(50, end) forwards';
                }, 0); // Apply animation with a slight delay to trigger reflow
            }
        });
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('resize', checkElements);
    checkElements(); // Initial check
});





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
        for (let i = 0; i < typedOutElements.length; i++) {
            if (isElementInViewport(typedOutElements[i])) {
                typedOutElements[i].style.animation = 'typing 3s steps(50, end) forwards';
            }
        }
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('resize', checkElements);
    checkElements(); // Initial check
});


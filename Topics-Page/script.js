document.addEventListener('DOMContentLoaded', function() {
    const orangeChar = document.getElementById('orangeChar');
    const cloudChar = document.getElementById('cloudChar');
    const starChar = document.getElementById('starChar');
    const greenChar = document.getElementById('greenChar');

    // Function to add the jump animation
    function addJumpEffect(element) {
        // Remove the class first to ensure the animation can be re-triggered
        element.classList.remove('jump-animation');
        // A small timeout allows the browser to register the class removal before re-adding
        void element.offsetWidth; // Trigger reflow to restart animation
        element.classList.add('jump-animation');

        // Remove the class after the animation finishes to allow re-triggering
        element.addEventListener('animationend', () => {
            element.classList.remove('jump-animation');
        }, { once: true }); // Ensure this listener runs only once
    }

    if (orangeChar) {
        orangeChar.addEventListener('click', function() {
            addJumpEffect(orangeChar);
        });
    }

    if (cloudChar) {
        cloudChar.addEventListener('click', function() {
            addJumpEffect(cloudChar);
        });
    }

    if (starChar) {
        starChar.addEventListener('click', function() {
            addJumpEffect(starChar);
        });
    }

    if (greenChar) {
        greenChar.addEventListener('click', function() {
            addJumpEffect(greenChar);
        });
    }

    // Optional: Add hover effects (from previous suggestion, keep if you want them)
    [orangeChar, cloudChar, starChar, greenChar].forEach(char => {
        if (char) {
            char.addEventListener('mouseenter', () => {
                char.style.transition = 'transform 0.2s ease-in-out';
                char.style.transform = char.style.transform + ' translateY(-5px)';
            });

            char.addEventListener('mouseleave', () => {
                char.style.transition = 'transform 0.2s ease-in-out';
                char.style.transform = char.style.transform.replace(' translateY(-5px)', '');
            });
        }
    });
});
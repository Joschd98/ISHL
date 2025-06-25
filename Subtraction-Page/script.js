// script.js

// Optional enhancement: Add animation to 'Let's Practice' button
const practiceButton = document.querySelector('.practice-link');

practiceButton.addEventListener('mouseenter', () => {
  practiceButton.style.transform = 'scale(1.1)';
});

practiceButton.addEventListener('mouseleave', () => {
  practiceButton.style.transform = 'scale(1)';
});

practiceButton.addEventListener('click', (e) => {
  e.preventDefault();
  //alert("Time to practice subtraction! 🎉");
  window.location.href = '../Level-Road-1-Page/map.html';
  // You can replace the alert with actual navigation if needed:
  // window.location.href = 'practice.html';
});

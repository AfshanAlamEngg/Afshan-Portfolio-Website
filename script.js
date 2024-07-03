// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const targetText = "Hi, I'm Afshan Alam";
  const heroTextElement = document.getElementById('hero-text');

  function typeWriter(text, element, speed) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => retypeWriter(text, element, speed), 3000); // Wait 3 seconds before retyping
      }
    }
    type();
  }

  function retypeWriter(text, element, speed) {
    let index = text.length;
    function retype() {
      if (index > 0) {
        element.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(retype, speed);
      } else {
        setTimeout(() => typeWriter(text, element, speed), 1000); // Wait 1 second before typing again
      }
    }
    retype();
  }

  typeWriter(targetText, heroTextElement, 100); // Typing speed is 100ms per character
});

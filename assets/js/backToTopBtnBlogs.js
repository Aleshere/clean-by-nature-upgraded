const scrollToTopButton = document.getElementById('js-top');

// Shows scroll-to-top button if we scroll beyond the height of the initial window
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, add a class to the scroll-to-top button to show it
  if (y > 0) {
    scrollToTopButton.className = 'top-link show';
  } else {
    scrollToTopButton.className = 'top-link hide';
  }
};

window.addEventListener('scroll', scrollFunc);

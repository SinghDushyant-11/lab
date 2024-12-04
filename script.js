// JavaScript function to show a welcome message
function showMessage() {
    alert("Welcome to my website!");
  }
  
  // JavaScript function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
  }
  
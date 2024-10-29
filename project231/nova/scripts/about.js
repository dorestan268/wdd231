document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleMenuButtons(); 
    });
  
    function toggleMenuButtons() {
        menuToggle.classList.toggle('close');
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const currentPage = window.location.pathname.split("/").pop();
      const links = {
        'thompson.html': document.getElementById('home'),
        'about_us.html': document.getElementById('directory'),
        'join.html': document.getElementById('join'),
        'discover.html': document.getElementById('discover')
      };
    
      if (links[currentPage]) {
        links[currentPage].classList.add('active');
      }
    
  
      const themeToggleButton = document.getElementById('theme-toggle');
      const currentYearSpan = document.getElementById('currentyear');
      const lastModifiedSpan = document.getElementById('lastModified');
      const menuToggleButton = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
    
      // Menu toggle functionality for mobile
      menuToggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggleButton.classList.toggle('open');
      });
    
      // Fetch and display members data
      async function fetchMembers() {
        try {
          const response = await fetch('data/members.json');
          if (!response.ok) throw new Error('Network response was not ok');
          const members = await response.json();
          displayMembers(members);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    
    
      themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const themeIcon = themeToggleButton.querySelector('img');
        themeIcon.src = document.body.classList.contains('dark-theme') ? 'images/light.png' : 'images/moon.png';
      });
    
      currentYearSpan.textContent = new Date().getFullYear();
      lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    
      fetchMembers();
    });
    
    


document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const responseMessage = document.getElementById('responseMessage');

    // Display a success message
    responseMessage.textContent = `Thank you for subscribing with ${emailInput.value}!`;
    responseMessage.style.color = 'green';

    // Clear the input field
    emailInput.value = '';
});

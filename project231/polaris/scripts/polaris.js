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
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');
    const menuToggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    // Menu toggle functionality for mobile
    menuToggleButton.addEventListener('click', () => {
      nav.classList.toggle('active'); // Add/remove 'active' class to show/hide the menu
      toggleMenuButtons(); // Call the toggle function for the buttons
    });
  
    function toggleMenuButtons() {
      menuToggleButton.classList.toggle('open'); // Add/remove 'open' class for menu button
    }
     // Theme toggle functionality
     themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
  
      // Update the button icon based on the current theme
      const themeIcon = themeToggleButton.querySelector('img');
      if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'images/light.png'; // Switch to light mode icon
      } else {
        themeIcon.src = 'images/moon.png'; // Switch to dark mode icon
      }
    });
  
    // Display the current year and last modified date in the footer
    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
  
    // Fetch members data on page load
    fetchMembers();
  });
  
  
  
  
  const products = {
    1: {
      "name": "Polaris RZR XP",
      "basePrice": "25,999.99€",
      "oldPrice": "28,499.99€",
      "discount": "-9%",
      "rating": "★★★★☆",
      "reviews": "850 reviews",
      "colors": [
        {
          "name": "Lime Squeeze",
          "price": "26,499.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/rzr/2021/model/vehicle-cards/rzr-turbo-s-lifted-lime.png?v=82ca229c&format=webp"
          ]
        },
        {
          "name": "Turbo Silver",
          "price": "26,999.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/rzr/2020/model/vehicle-cards/rzr-s-4-1000-turbo-silver.png"
          ]
        }
      ],
      "description": "The Polaris RZR XP is a powerful, high-performance UTV built for extreme off-road adventures.",
      "stock": "In stock"
    },
    2: {
      "name": "Polaris Sportsman 570",
      "basePrice": "8,999.99€",
      "oldPrice": "9,499.99€",
      "discount": "-5%",
      "rating": "★★★★☆",
      "reviews": "1,200 reviews",
      "colors": [
        {
          "name": "Desert Tan",
          "price": "9,199.99€",
          "images": [
            "https://www.polarisbritain.com/fileadmin/templates/model25/trim/emea/atv/spts570sp-metal-md.jpg"
          ]
        },
        {
          "name": "Sage Green",
          "price": "8,999.99€",
          "images": [
            "https://www.polarisbritain.com/fileadmin/templates/model25/trim/emea/atv/spts570-agri-tr.jpg"
          ]
        }
      ],
      "description": "Polaris Sportsman 570 offers smooth handling and high towing capacity, ideal for both work and recreation.",
      "stock": "In stock"
    },
    3: {
      "name": "Polaris Ranger 1000",
      "basePrice": "15,999.99€",
      "oldPrice": "16,999.99€",
      "discount": "-6%",
      "rating": "★★★★☆",
      "reviews": "950 reviews",
      "colors": [
        {
          "name": "Pursuit Camo",
          "price": "16,499.99€",
          "images": [
            "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/D0/E0/D0E0936B-492F-44FC-98EB-2FF32454EF43.jpg"
          ]
        }
      ],
      "description": "Built for heavy-duty tasks, the Polaris Ranger 1000 offers robust performance and extensive cargo capacity.",
      "stock": "In stock"
    },
    4: {
      "name": "Polaris General 1000",
      "basePrice": "17,999.99€",
      "oldPrice": "18,999.99€",
      "discount": "-5%",
      "rating": "★★★★☆",
      "reviews": "700 reviews",
      "colors": [
        {
          "name": "Stealth Black",
          "price": "18,499.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/general/2021/model/vehicle-cards/general-xp-4-1000-adventure-hunt-le-stealth-black.png?v=7f8c74bc&format=webp"
          ]
        }
      ],
      "description": "A versatile UTV that blends the power of RZR and the utility of Ranger, great for both trail riding and heavy-duty work.",
      "stock": "In stock"
    },
    5: {
      "name": "Polaris Pro XD",
      "basePrice": "14,999.99€",
      "oldPrice": "15,799.99€",
      "discount": "-5%",
      "rating": "★★★★☆",
      "reviews": "600 reviews",
      "colors": [
        {
          "name": "Yellow",
          "price": "15,499.99€",
          "images": [
            "https://prolinewraps.com/cdn/shop/products/plsg_xp4_vortex_yellow_6fd05df6-6b86-4a91-927c-57797166bf2e.jpg?v=1587600232"
          ]
        }
      ],
      "description": "The Polaris Pro XD is a highly durable, commercial-grade UTV built for rigorous job site work.",
      "stock": "In stock"
    },
    6: {
      "name": "Polaris RZR Turbo R",
      "basePrice": "27,999.99€",
      "oldPrice": "29,999.99€",
      "discount": "-7%",
      "rating": "★★★★★",
      "reviews": "1,000 reviews",
      "colors": [
        {
          "name": "Onyx Black",
          "price": "28,999.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/rzr/2024/model/vehicle-cards/rzr-turbo-r-sport-my24-b6c9-onyx-black-z24gae92al.png?v=bba9d4f8"
          ]
        }
      ],
      "description": "The Turbo R is a high-powered, turbocharged UTV designed for those seeking top speed and ruggedness.",
      "stock": "In stock"
    },
    7: {
      "name": "Polaris RZR Pro R",
      "basePrice": "30,499.99€",
      "oldPrice": "32,499.99€",
      "discount": "-6%",
      "rating": "★★★★★",
      "reviews": "850 reviews",
      "colors": [
        {
          "name": "Matte Titanium",
          "price": "31,999.99€",
          "images": [
            "https://cdnmedia.endeavorsuite.com/images/catalogs/21074/products/detail/e23160da-b003-4726-8ae1-4587c816e2ed.jpg"
          ]
        }
      ],
      "description": "The RZR Pro R offers unmatched power and control with its massive engine, ideal for expert off-road enthusiasts.",
      "stock": "In stock"
    },
    8: {
      "name": "Polaris Ranger Crew XP 1000",
      "basePrice": "19,999.99€",
      "oldPrice": "21,499.99€",
      "discount": "-7%",
      "rating": "★★★★☆",
      "reviews": "950 reviews",
      "colors": [
        {
          "name": "White Lightning",
          "price": "20,499.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/ranger/2021/model/vehicle-cards/ranger-crew-xp-1000-premium-ghost-white.png?v=822134b8&format=webp"
          ]
        }
      ],
      "description": "A multi-passenger UTV with top-tier power and comfort, suitable for both work and family outdoor adventures.",
      "stock": "In stock"
    },
    9: {
      "name": "Polaris Slingshot",
      "basePrice": "22,999.99€",
      "oldPrice": "24,499.99€",
      "discount": "-6%",
      "rating": "★★★★★",
      "reviews": "1,200 reviews",
      "colors": [
        {
          "name": "Red Pearl",
          "price": "23,499.99€",
          "images": [
            "https://www.kutvek-amerika.com/images/produits/original/atomik-slingshot-rouge-6248.jpg"
          ]
        }
      ],
      "description": "A three-wheeled roadster designed for unique on-road excitement, delivering a thrilling ride experience.",
      "stock": "In stock"
    },
    10: {
      "name": "Polaris Youth RZR 200 EFI",
      "basePrice": "5,999.99€",
      "oldPrice": "6,499.99€",
      "discount": "-8%",
      "rating": "★★★★☆",
      "reviews": "400 reviews",
      "colors": [
        {
          "name": "Velocity Blue",
          "price": "5,999.99€",
          "images": [
            "https://cdn1.polaris.com/globalassets/rzr/2023/model/vehicle-cards/rzr-troy-lee-youth-my23-3ix0-velocity-blue.png?v=b458ea21&format=webp"
          ]
        }
      ],
      "description": "A youth-friendly UTV equipped with safety features for beginner riders, making it ideal for family outings.",
      "stock": "In stock"
    }
  };
  
  const productGridContainer = document.querySelector('.product-grid');
  const productModal = document.getElementById('product-modal');
  const closeModalButton = document.getElementById('close-modal');
  
  // Generate product cards
  Object.keys(products).forEach((productId) => {
    const product = products[productId];
    const selectedColor = product.colors[0]; // Default to the first color
    
    // Create options for color selector
    let colorOptions = product.colors.map((color, index) => `
      <option value="${index}">${color.name}</option>
    `).join('');
  
    // Create the HTML for the product card
    const productCard = `
      <div class="product-card" data-id="${productId}">
        <img src="${selectedColor.images[0]}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div class="product-rating">${product.rating} (${product.reviews})</div>
        <div class="product-price">
          <span class="discount-price">${selectedColor.price}</span>
          <span class="old-price">${product.oldPrice}</span>
          <span class="discount">${product.discount}</span>
        </div>
      
        <p class="product-description">${product.description}</p>
        <div class="product-stock">${product.stock}</div>
        <button class="view-details" data-id="${productId}">View Details</button>
      </div>
    `;
    
    // Append the product card to the grid container
    productGridContainer.innerHTML += productCard;
  });
  
  
  // Function to open the modal and populate details
  function openModal(productId) {
    const product = products[productId];
    const selectedColor = product.colors[0]; // Default color for display
  
    // Populate the modal with product details
    document.getElementById('modal-product-name').innerText = product.name;
    document.getElementById('modal-product-image').src = selectedColor.images[0];
    document.getElementById('modal-product-rating').innerText = product.rating;
    document.getElementById('modal-product-description').innerText = product.description;
    document.getElementById('modal-product-stock').innerText = product.stock;
    document.getElementById('modal-product-reviews').innerText = product.reviews;
  
    // Populate color selector in the modal
    const colorSelector = document.getElementById('modal-color-selector');
    colorSelector.innerHTML = product.colors.map((color, index) => `
      <option value="${index}">${color.name}</option>
    `).join('');
  
    // Show the modal
    productModal.style.display = "block";
  
    // Set event listener for color change in the modal
    colorSelector.onchange = function () {
      const selectedColorIndex = colorSelector.value;
      const newSelectedColor = product.colors[selectedColorIndex];
  
      // Update the modal image and price based on the selected color
      document.getElementById('modal-product-image').src = newSelectedColor.images[0];
      document.getElementById('modal-product-price').innerText = newSelectedColor.price;
    };
  }
  
  // Event listener for View Details button
  productGridContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('view-details')) {
      const productId = event.target.getAttribute('data-id');
      openModal(productId);
    }
  });
  
  // Close the modal when the close button is clicked
  closeModalButton.addEventListener('click', function() {
    productModal.style.display = "none";
  });
  
  // Close the modal when clicking outside of the modal content
  window.addEventListener('click', function(event) {
    if (event.target === productModal) {
      productModal.style.display = "none";
    }
  });
  
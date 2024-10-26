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
      name: "Ford Ranger",
      basePrice: "25,999.99€",
      oldPrice: "28,999.99€",
      discount: "-10%",
      rating: "★★★★☆",
      reviews: "1,200 reviews",
      colors: [
        {
          name: "Orange",
          price: "26,999.99€",
          images: [
            "https://i.pinimg.com/736x/e6/f9/e8/e6f9e875b9b5406f5eb9c21578e49053.jpg"
          ]
        },
        {
          name: "Black",
          price: "25,999.99€",
          images: [
            "https://www.instacar.gr/cdn-cgi/image/format=webp,metadata=none,width=520,height=360,fit=pad,background=transparent/https%3A%2F%2Fd10ax2wcinhk08.cloudfront.net%2Fimages%2F9eee4d60-fdb2-4399-ae72-151d6fa168f1_ford-ranger-wildtrack-2022.png"
          ]
        }
      ],
      description: "A powerful and durable mid-size pickup truck designed for both work and adventure, featuring advanced off-road capabilities.",
      stock: "In stock"
    },
    2: {
      name: "Tesla Model 3",
      basePrice: "42,499.99€",
      oldPrice: "45,999.99€",
      discount: "-8%",
      rating: "★★★★★",
      reviews: "3,500 reviews",
      colors: [
        {
          name: "Red",
          price: "42,999.99€",
          images: [
            "https://pbs.twimg.com/media/FqwqkIaX0AMUuZY.jpg:large"
          ]
        },
        {
          name: "White",
          price: "42,499.99€",
          images: [
            "https://img.freepik.com/premium-photo/simplistic-cartoon-tesla-model-x-vector-illustration-with-doors-open-white-background_878783-15844.jpg?w=360"
          ]
        }
      ],
      description: "Tesla's fully electric sedan with impressive range, dual motor all-wheel drive, and cutting-edge technology.",
      stock: "In stock"
    },
    3: {
      name: "Toyota Corolla",
      basePrice: "18,999.99€",
      oldPrice: "20,499.99€",
      discount: "-7%",
      rating: "★★★★☆",
      reviews: "2,000 reviews",
      colors: [
        {
          name: "White",
          price: "18,999.99€",
          images: [
            "https://images.dealer.com/autodata/us/color/2024/USD40TOS232C0/089.jpg?impolicy=resize&w=414"
          ]
        },
        {
          name: "Blue",
          price: "19,299.99€",
          images: [
            "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/cy/configurationtype/visual-for-grade-selector/product-token/8643bbaf-11c8-4b5d-ab04-1688bce14365/grade/ebbf4eae-da4d-4b66-ba5a-d1b6ad8e5898/body/02dd77b8-85e3-43f9-bf89-6e4c5fdf067b/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png"
          ]
        }
      ],
      description: "A highly reliable and fuel-efficient compact sedan, perfect for city driving with excellent safety ratings.",
      stock: "In stock"
    },
    4: {
      name: "Jeep Wrangler",
      basePrice: "35,499.99€",
      oldPrice: "37,999.99€",
      discount: "-6%",
      rating: "★★★★☆",
      reviews: "1,800 reviews",
      colors: [
        {
          name: "Green",
          price: "35,999.99€",
          images: [
            "https://i.pinimg.com/736x/f2/ba/39/f2ba391edc200487c43e0a7285d47e1d.jpg"
          ]
        },
        {
          name: "Yellow",
          price: "36,499.99€",
          images: [
            "https://www.jeep.es/content/dam/jeep/crossmarket/model/wrangler-JL/trims-4d/sahara/465/monotone/baya-yellow.png"
          ]
        }
      ],
      description: "A rugged SUV designed for extreme off-road performance, featuring timeless design and modern technology.",
      stock: "In stock"
    },
    5: {
      name: "BMW X5",
      basePrice: "75,999.99€",
      oldPrice: "82,499.99€",
      discount: "-8%",
      rating: "★★★★★",
      reviews: "2,500 reviews",
      colors: [
        {
          name: "Black",
          price: "76,499.99€",
          images: [
            "https://m.atcdn.co.uk/vms/media/a5721cc3f79a470da00b69fe2827193e.jpg"
          ]
        }
      ],
      description: "A luxury SUV that offers an elegant blend of performance, comfort, and cutting-edge technology for families and executives.",
      stock: "In stock"
    },
    6: {
      name: "Audi A4",
      basePrice: "41,999.99€",
      oldPrice: "45,499.99€",
      discount: "-7%",
      rating: "★★★★☆",
      reviews: "1,500 reviews",
      colors: [
        {
          name: "Silver",
          price: "42,499.99€",
          images: [
            "https://di-uploads-pod3.dealerinspire.com/vindeversautohausofsylvania/uploads/2017/07/2018-Audi-A4-On-White.png"
          ]
        },
        {
          name: "Black",
          price: "41,999.99€",
          images: [
            "https://images.dealer.com/autodata/us/color/2025/USD50AUC017B0/0E0E.jpg?impolicy=resize&w=414"
          ]
        }
      ],
      description: "A sporty, luxury sedan with a refined interior, advanced technology, and dynamic driving experience.",
      stock: "In stock"
    },
    7: {
      name: "Honda CR-V",
      basePrice: "27,499.99€",
      oldPrice: "29,999.99€",
      discount: "-8%",
      rating: "★★★★☆",
      reviews: "2,100 reviews",
      colors: [
        {
          name: "Blue",
          price: "27,999.99€",
          images: [
            "https://vehicle-images.dealerinspire.com/stock-images/chrome/a99dd2eeb3e17d3feebf77cb6ba8b8f2.png"
          ]
        },
        {
          name: "White",
          price: "27,499.99€",
          images: [
            "https://www.de.honda.ch/content/dam/central/cars/crv-hybrid-2021/CR-V-Hybrid-2021-popular-configurations3.png/_jcr_content/renditions/c3.png"
          ]
        }
      ],
      description: "A spacious and versatile compact SUV, ideal for families with advanced safety features and great fuel efficiency.",
      stock: "In stock"
    },
    8: {
      name: "Mercedes-Benz GLE",
      basePrice: "66,999.99€",
      oldPrice: "71,499.99€",
      discount: "-6%",
      rating: "★★★★★",
      reviews: "2,300 reviews",
      colors: [
        {
          name: "Silver",
          price: "67,499.99€",
          images: [
            "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2021-Mercedes-Benz-GLE-hero.png"
          ]
        }
      ],
      description: "A high-end luxury SUV combining performance, advanced technology, and supreme comfort for long journeys.",
      stock: "In stock"
    },
    9: {
      name: "Volkswagen Golf",
      basePrice: "24,499.99€",
      oldPrice: "26,499.99€",
      discount: "-7%",
      rating: "★★★★☆",
      reviews: "2,200 reviews",
      colors: [
        {
          name: "White",
          price: "24,499.99€",
          images: [
            "https://i.pinimg.com/736x/03/5c/6d/035c6d9e39fe11852356f5d9d39bb015.jpg"
          ]
        },
        {
          name: "Red",
          price: "24,999.99€",
          images: [
            "https://i.pinimg.com/736x/a4/be/72/a4be72cd3d27773bb2860a2ddeda3d84.jpg"
          ]
        }
      ],
      description: "A classic compact car with great handling, efficient engines, and advanced safety features, perfect for city life.",
      stock: "In stock"
    },
    10: {
      name: "Chevrolet Tahoe",
      basePrice: "53,999.99€",
      oldPrice: "58,499.99€",
      discount: "-8%",
      rating: "★★★★☆",
      reviews: "1,700 reviews",
      colors: [
        {
          name: "Black",
          price: "54,499.99€",
          images: [
            "https://chevrolet.com.ph/wp-content/uploads/2022/09/mlgM4ykY16eKEZ3vrozzKlhAoKnkLYtzUhfPbWuLSzeibkQwlA.jpg"
          ]
        }
      ],
      description: "A full-size SUV designed for families with plenty of space, powerful engines, and the latest technology for long trips.",
      stock: "In stock"
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
  
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
    "1": {
      "name": "Diamond Solitaire Ring",
      "basePrice": "2,499.99€",
      "oldPrice": "3,299.99€",
      "discount": "-24%",
      "rating": "★★★★★",
      "reviews": "1,500 reviews",
      "colors": [
        {
          "name": "White Gold",
          "price": "2,499.99€",
          "images": [
            "https://www.angelicdiamonds.com/images/product/enrd168_wg_side.jpg"
          ]
        },
        {
          "name": "Yellow Gold",
          "price": "2,599.99€",
          "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHKOKlFfjLO1vkGjV76XGKV0km8H9BK379A&s"
          ]
        }
      ],
      "description": "A timeless diamond solitaire ring set in white or yellow gold. Ideal for engagements or special occasions.",
      "stock": "In stock"
    },
    "2": {
      "name": "Emerald Pendant Necklace",
      "basePrice": "999.99€",
      "oldPrice": "1,199.99€",
      "discount": "-17%",
      "rating": "★★★★☆",
      "reviews": "850 reviews",
      "colors": [
        {
          "name": "Rose Gold",
          "price": "999.99€",
          "images": [
            "https://lilyarkwright.com/cdn/shop/files/Eliza-emerald-pendant-necklace-rose-gold-Lily-Arkwright-Image-1_900x.jpg?v=1683112580"
          ]
        },
        {
          "name": "Platinum",
          "price": "1,099.99€",
          "images": [
            "https://i.ebayimg.com/images/g/PxIAAOSwAOJkkJPW/s-l400.jpg"
          ]
        }
      ],
      "description": "An elegant emerald pendant necklace in a rose gold or platinum setting, offering a touch of luxury.",
      "stock": "In stock"
    },
    "3": {
      "name": "Sapphire Stud Earrings",
      "basePrice": "499.99€",
      "oldPrice": "599.99€",
      "discount": "-17%",
      "rating": "★★★★☆",
      "reviews": "600 reviews",
      "colors": [
        {
          "name": "Silver",
          "price": "499.99€",
          "images": [
            "https://www.kay.com/productimages/processed/V-135374104_0_800.jpg?pristine=true"
          ]
        },
        {
          "name": "Gold",
          "price": "529.99€",
          "images": [
            "https://jianlondon.co.uk/prodimages/Large/24846YK-2.jpg"
          ]
        }
      ],
      "description": "Classic sapphire stud earrings available in silver or gold. Perfect for everyday elegance.",
      "stock": "In stock"
    },
    "4": {
      "name": "Pearl Choker Necklace",
      "basePrice": "299.99€",
      "oldPrice": "349.99€",
      "discount": "-14%",
      "rating": "★★★★☆",
      "reviews": "420 reviews",
      "colors": [
        {
          "name": "White Pearl",
          "price": "299.99€",
          "images": [
            "https://i.etsystatic.com/5291405/r/il/3bc5e5/4001483004/il_570xN.4001483004_9d9u.jpg"
          ]
        },
        {
          "name": "Black Pearl",
          "price": "319.99€",
          "images": [
            "https://i.etsystatic.com/5584336/r/il/571772/6003518538/il_340x270.6003518538_bagk.jpg"
          ]
        }
      ],
      "description": "A delicate pearl choker necklace available with white or black pearls, perfect for a refined look.",
      "stock": "In stock"
    },
    "5": {
      "name": "Ruby Tennis Bracelet",
      "basePrice": "1,499.99€",
      "oldPrice": "1,799.99€",
      "discount": "-17%",
      "rating": "★★★★★",
      "reviews": "900 reviews",
      "colors": [
        {
          "name": "White Gold",
          "price": "1,499.99€",
          "images": [
            "https://www.bravermanjewelry.com/pub/media/catalog/product/cache/image/700x700/af097278c5db4767b0fe9bb92fe21690/1/5/1535-view-white-gold-ruby.jpg"
          ]
        },
        {
          "name": "Yellow Gold",
          "price": "1,549.99€",
          "images": [
            "https://media.superjeweler.com/Images/Products/700X700/pic26839-1"
          ]
        }
      ],
      "description": "A luxurious ruby tennis bracelet set in white or yellow gold. An exceptional addition to any jewelry collection.",
      "stock": "In stock"
    },
    "6": {
      "name": "Opal Drop Earrings",
      "basePrice": "199.99€",
      "oldPrice": "249.99€",
      "discount": "-20%",
      "rating": "★★★★☆",
      "reviews": "350 reviews",
      "colors": [
        {
          "name": "Sterling Silver",
          "price": "199.99€",
          "images": [
            "https://philipjonesjewellery.com/cdn/shop/products/blueopaldropearrings_1800x1800.jpg?v=1653405962"
          ]
        },
        {
          "name": "Gold",
          "price": "219.99€",
          "images": [
            "https://cdn11.bigcommerce.com/s-rntsv/images/stencil/1280x1280/products/10517/109338/EAR9196.1__45094.1720591572.JPG?c=2"
          ]
        }
      ],
      "description": "Elegant opal drop earrings in sterling silver or gold. A unique and dazzling choice.",
      "stock": "In stock"
    },
    "7": {
      "name": "Amethyst Cocktail Ring",
      "basePrice": "129.99€",
      "oldPrice": "159.99€",
      "discount": "-18%",
      "rating": "★★★★☆",
      "reviews": "220 reviews",
      "colors": [
        {
          "name": "Rose Gold",
          "price": "129.99€",
          "images": [
            "https://i5.walmartimages.com/seo/ANGARA-Natural-1-4-Ct-Amethyst-with-Diamond-Halo-Ring-in-14K-Rose-Gold-for-Women-Ring-Size-4_f9b1c060-5d2e-4b8c-b85c-dfe7ea8b92b9.9dc8d5651ed6aae7de5c1160c80c33d1.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          ]
        },
        {
          "name": "White Gold",
          "price": "139.99€",
          "images": [
            "https://www.beckers.com/media/catalog/product/cache/4295d61f31fb9745f9f550fe99874a38/m/2/m2obj.recipe_yellow__-71858_60000_P.webp"
          ]
        }
      ],
      "description": "A striking amethyst cocktail ring, set in rose or yellow gold. Adds a pop of color to any outfit.",
      "stock": "In stock"
    },
    "8": {
      "name": "Topaz Pendant",
      "basePrice": "299.99€",
      "oldPrice": "349.99€",
      "discount": "-14%",
      "rating": "★★★★☆",
      "reviews": "240 reviews",
      "colors": [
        {
          "name": "White Gold",
          "price": "299.99€",
          "images": [
            "https://www.jared.com/productimages/processed/V-961259506_0_800.jpg?pristine=true"
          ]
        },
        {
          "name": "Yellow Gold",
          "price": "329.99€",
          "images": [
            "https://regardjewelry.com/cdn/shop/products/texas-star-cut-blue-topaz-necklace-at-regard-jewelry-in-austin-texas-texas-designs-664.jpg?v=1649655935"
          ]
        }
      ],
      "description": "A radiant topaz pendant in white or yellow gold, perfect for adding sparkle to your style.",
      "stock": "In stock"
    },
    "9": {
      "name": "Garnet Eternity Band",
      "basePrice": "549.99€",
      "oldPrice": "649.99€",
      "discount": "-15%",
      "rating": "★★★★★",
      "reviews": "570 reviews",
      "colors": [
        {
          "name": "Rose Gold",
          "price": "549.99€",
          "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzAXap3KietT4dK2DyQ491kjAFA-uRlFffg&s"
          ]
        },
        {
          "name": "Yellow Gold",
          "price": "579.99€",
          "images": [
            "https://www.bravermanjewelry.com/pub/media/catalog/product/cache/image/700x700/af097278c5db4767b0fe9bb92fe21690/1/3/1381-view-yellow-gold-garnet-rhodolite.jpg"
          ]
        }
      ],
      "description": "A beautiful garnet eternity band available in rose or yellow gold, symbolizing endless elegance.",
      "stock": "In stock"
    },
    "10": {
      "name": "Aquamarine Cuff Bracelet",
      "basePrice": "699.99€",
      "oldPrice": "849.99€",
      "discount": "-18%",
      "rating": "★★★★☆",
      "reviews": "410 reviews",
      "colors": [
        {
          "name": "Silver",
          "price": "699.99€",
          "images": [
            "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/8971conning/diamond/aquamarine_AAA/stone2/diamond-Swarovsky_AAAAA/alloycolour/white.jpg"
          ]
        },
        {
          "name": "Gold",
          "price": "749.99€",
          "images": [
            "https://m.media-amazon.com/images/I/41YLz8KKmvL.jpg"
          ]
        }
      ],
      "description": "A dazzling aquamarine cuff bracelet in silver or white gold, adding sophistication to any attire.",
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
  
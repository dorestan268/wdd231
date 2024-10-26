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
      name: "Modern Leather Sofa",
      basePrice: "899.99€",
      oldPrice: "1,199.99€",
      discount: "-25%",
      rating: "★★★★☆",
      reviews: "800 reviews",
      colors: [
        {
          name: "Black",
          price: "899.99€",
          images: [
            "https://www.vigfurniture.com/media/catalog/product/cache/6d4faa98f2b48c05dae02148ead85f2f/n/a/natalia_vgkk_78208_black_sofa_1.jpg"
          ]
        },
        {
          name: "Brown",
          price: "949.99€",
          images: [
            "https://www.meubles.ie/images/products/standard/26301_2089117.jpg"
          ]
        }
      ],
      description: "A sleek and modern leather sofa with comfortable seating, perfect for any living room. Made with high-quality leather.",
      stock: "In stock"
    },
    2: {
      name: "Wooden Dining Table Set",
      basePrice: "699.99€",
      oldPrice: "849.99€",
      discount: "-15%",
      rating: "★★★★★",
      reviews: "1,200 reviews",
      colors: [
        {
          name: "Oak",
          price: "699.99€",
          images: [
            "https://css.lakiq.com/site/img/item/2024/05/12/12546750/600x600.jpg"
          ]
        },
        {
          name: "Walnut",
          price: "749.99€",
          images: [
            "https://cdn11.bigcommerce.com/s-rtmhm12d/images/stencil/1280x1280/products/2635/12320/RAYAN_DINING_7_PC_SET_WALNUT__74520.1697316173.jpg?c=2"
          ]
        }
      ],
      description: "A beautifully crafted wooden dining table set, seating up to six people. Ideal for family gatherings.",
      stock: "In stock"
    },
    3: {
      name: "King Size Bed Frame",
      basePrice: "499.99€",
      oldPrice: "649.99€",
      discount: "-20%",
      rating: "★★★★☆",
      reviews: "500 reviews",
      colors: [
        {
          name: "White",
          price: "499.99€",
          images: [
            "https://m.media-amazon.com/images/I/81GJi80EApL._AC_UF894,1000_QL80_.jpg"
          ]
        },
        {
          name: "Grey",
          price: "529.99€",
          images: [
            "https://m.media-amazon.com/images/I/81etcPmRyZL._AC_UF894,1000_QL80_.jpg"
          ]
        }
      ],
      description: "A sturdy king-size bed frame with a minimalist design, perfect for modern bedrooms. Available in two colors.",
      stock: "In stock"
    },
    4: {
      name: "Glass Coffee Table",
      basePrice: "199.99€",
      oldPrice: "249.99€",
      discount: "-20%",
      rating: "★★★★☆",
      reviews: "300 reviews",
      colors: [
        {
          name: "Clear Glass",
          price: "199.99€",
          images: [
            "https://www.homegenies.co.uk/WebRoot/epagesUK/Shops/es142653/5602/A88B/849D/F5EE/99BF/0A0F/111B/223B/Clear_Glass_coffee_table_oak_veneer_base.jpg"
          ]
        },
        {
          name: "Frosted Glass",
          price: "219.99€",
          images: [
            "https://m.media-amazon.com/images/I/514ttui86jL._AC_UF894,1000_QL80_.jpg"
          ]
        }
      ],
      description: "A chic and modern glass coffee table with a sleek metal frame, perfect for contemporary living rooms.",
      stock: "In stock"
    },
    5: {
      name: "Office Desk with Shelves",
      basePrice: "299.99€",
      oldPrice: "349.99€",
      discount: "-14%",
      rating: "★★★★☆",
      reviews: "450 reviews",
      colors: [
        {
          name: "Black",
          price: "299.99€",
          images: [
            "https://www.chairoffice.co.uk/media/2963/crescent-panel-desk.jpg?width=770"
          ]
        },
        {
          name: "White",
          price: "319.99€",
          images: [
            "https://cdn3.evostore.io/productimages/dynamic/l/i004408_1.jpg"
          ]
        }
      ],
      description: "A versatile office desk with built-in shelves for extra storage. Ideal for home offices and study rooms.",
      stock: "In stock"
    },
    6: {
      name: "Recliner Armchair",
      basePrice: "399.99€",
      oldPrice: "499.99€",
      discount: "-20%",
      rating: "★★★★★",
      reviews: "600 reviews",
      colors: [
        {
          name: "Dark Brown",
          price: "399.99€",
          images: [
            "https://www.edmondsonsfurniture.co.uk/a-bespoke-client-folders/edmondsons/bespoke-images/product/x-la-chair--brown--71842.png"
          ]
        },
        {
          name: "Beige",
          price: "419.99€",
          images: [
            "https://lifestylefurniture.co.nz/cdn/shop/products/salvador-beige-single-seater-leather-recliner-189686_1024x.jpg?v=1694469323"
          ]
        }
      ],
      description: "A comfortable and stylish recliner armchair with smooth reclining mechanism, perfect for relaxation.",
      stock: "In stock"
    },
    7: {
      name: "Bookshelf Unit",
      basePrice: "249.99€",
      oldPrice: "299.99€",
      discount: "-16%",
      rating: "★★★★☆",
      reviews: "320 reviews",
      colors: [
        {
          name: "Espresso",
          price: "249.99€",
          images: [
            "https://i.ebayimg.com/images/g/nS8AAOSwT99lH5tG/s-l1200.jpg"
          ]
        },
        {
          name: "White",
          price: "259.99€",
          images: [
            "https://www.furnitureinfashion.net/images/feivel-high-gloss-bookcase-7-shelves-white.jpg"
          ]
        }
      ],
      description: "A tall, multi-shelf unit perfect for storing books, decor, or office supplies. Available in multiple finishes.",
      stock: "In stock"
    },
    8: {
      name: "Upholstered Bedside Table",
      basePrice: "129.99€",
      oldPrice: "159.99€",
      discount: "-18%",
      rating: "★★★★☆",
      reviews: "200 reviews",
      colors: [
        {
          name: "Grey",
          price: "129.99€",
          images: [
            "https://www.archerssleepcentre.co.uk/images/products/large/_39160.webp"
          ]
        },
        {
          name: "Beige",
          price: "139.99€",
          images: [
            "https://i5.walmartimages.com/asr/219cadbf-7a13-4f96-8f83-1abb7cfb4048.3c74c463f9bf195b513152feb49321e2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          ]
        }
      ],
      description: "A stylish and compact bedside table with storage drawers and upholstered fabric. Perfect for modern bedrooms.",
      stock: "In stock"
    },
    9: {
      name: "Fabric Sectional Sofa",
      basePrice: "999.99€",
      oldPrice: "1,299.99€",
      discount: "-23%",
      rating: "★★★★★",
      reviews: "1,100 reviews",
      colors: [
        {
          name: "Light Grey",
          price: "999.99€",
          images: [
            "https://www.livingspaces.com/globalassets/productassets/300000-399999/320000-329999/323000-323999/323700-323799/323734/323734_grey_fabric_sectional_signature_01.jpg?w=1000&h=674&mode=pad"
          ]
        },
        {
          name: "Navy Blue",
          price: "1,049.99€",
          images: [
            "https://m.media-amazon.com/images/I/71Fi1JJKHuL.jpg"
          ]
        }
      ],
      description: "A spacious and comfortable fabric sectional sofa with modular design, ideal for large living rooms.",
      stock: "In stock"
    },
    10: {
      name: "Marble Dining Table",
      basePrice: "1,499.99€",
      oldPrice: "1,799.99€",
      discount: "-17%",
      rating: "★★★★★",
      reviews: "350 reviews",
      colors: [
        {
          name: "White Marble",
          price: "1,499.99€",
          images: [
            "https://images.thdstatic.com/productImages/a1b14d72-e57c-4919-989e-1fb5bdaa0614/svn/white-lucky-one-dining-room-sets-lo-ntraak057-64_600.jpg"
          ]
        },
        {
          name: "Black Marble",
          price: "1,549.99€",
          images: [
            "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2021/06/03/df972dd4ae584428b647c3ecd5b73a16.jpg"
          ]
        }
      ],
      description: "A luxurious marble dining table with a stunning finish, perfect for adding elegance to any dining room.",
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
  
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
    name: "iPhone 14",
    basePrice: "899.99€",
    oldPrice: "999.99€",
    discount: "-10%",
    rating: "★★★★☆",
    reviews: "1,200 reviews",
    colors: [
      {
        name: "Purple",
        price: "899.99€",
        images: [
          "https://tangerois.ma/20849-large_default/iphone-14-512gb-purple-apple.jpg"
        ]
      },
      {
        name: "Midnight",
        price: "899.99€",
        images: [
          "https://powermaccenter.com/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__en-US.jpg?v=1722936725&width=1445"
        ]
      }
    ],
    description: "Latest iPhone model with A15 Bionic chip and advanced camera.",
    stock: "In stock"
  },
  2: {
    name: "iPad Air",
    basePrice: "599.99€",
    oldPrice: "649.99€",
    discount: "-8%",
    rating: "★★★★☆",
    reviews: "850 reviews",
    colors: [
      {
        name: "Blue",
        price: "599.99€",
        images: [
          "https://i.pinimg.com/736x/ff/55/9e/ff559ed97592eb8dc628ae86b9ede5fd.jpg"
        ]
      },
      {
        name: "Green",
        price: "599.99€",
        images: [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1150&hei=1150&fmt=jpeg&qlt=95&.v=1644268592092"
        ]
      }
    ],
    description: "iPad Air with M1 chip and 10.9-inch Liquid Retina display.",
    stock: "In stock"
  },
  3: {
    name: "Canon EOS 90D",
    basePrice: "999.99€",
    oldPrice: "1,099.99€",
    discount: "-9%",
    rating: "★★★★☆",
    reviews: "600 reviews",
    colors: [
      {
        name: "Black",
        price: "999.99€",
        images: [
          "https://i5.walmartimages.com/asr/2a7d1102-71f5-48b7-93ef-cac12b41b914.5eba1b1a65a1b71657f222ef117bb958.jpeg"
        ]
      }
    ],
    description: "Canon DSLR camera with 32.5 MP APS-C CMOS sensor and 4K video.",
    stock: "In stock"
  },
  4: {
    name: "Samsung Galaxy S22",
    basePrice: "799.99€",
    oldPrice: "899.99€",
    discount: "-11%",
    rating: "★★★★★",
    reviews: "1,500 reviews",
    colors: [
      {
        name: "Phantom Black",
        price: "799.99€",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uRtpoWJKiQIHVDmjW9p5aTOOIYAWNyyDmg&s"
        ]
      },
      {
        name: "Green",
        price: "799.99€",
        images: [
          "https://images.samsung.com/is/image/samsung/p6pim/nz/2202/gallery/nz-galaxy-s22-s901-sm-s901ezggxnz-530777980?$650_519_PNG$"
        ]
      }
    ],
    description: "Samsung's latest flagship phone with Snapdragon 8 Gen 1 and Dynamic AMOLED display.",
    stock: "In stock"
  },
  // New Products
  5: {
    name: "MacBook Air M1",
    basePrice: "999.99€",
    oldPrice: "1,199.99€",
    discount: "-17%",
    rating: "★★★★★",
    reviews: "1,000 reviews",
    colors: [
      {
        name: "Gold",
        price: "999.99€",
        images: [
          "https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
        ]
      },
      {
        name: "Space Gray",
        price: "999.99€",
        images: [
          "https://itastore.se/wp-content/uploads/2022/02/MacBook-Pro-13-Retina-Mid-2014-10b.jpg"
        ]
      }
    ],
    description: "The MacBook Air features Apple's M1 chip for impressive performance.",
    stock: "In stock"
  },
  6: {
    name: "Sony WH-1000XM4",
    basePrice: "349.99€",
    oldPrice: "399.99€",
    discount: "-13%",
    rating: "★★★★★",
    reviews: "2,500 reviews",
    colors: [
      {
        name: "Black",
        price: "349.99€",
        images: [
          "https://d1ncau8tqf99kp.cloudfront.net/converted/74739_original_local_1200x1050_v3_converted.webp"
        ]
      },
      {
        name: "Silver",
        price: "349.99€",
        images: [
          "https://www.jbhifi.com.au/cdn/shop/products/477062-Product-0-I-637308363068657114_96a5a25c-fdf1-4710-85da-b7dd7673e4b3.jpg?v=1634082010"
        ]
      }
    ],
    description: "Wireless noise-cancelling headphones with premium sound quality.",
    stock: "In stock"
  },
  7: {
    name: "Dell XPS 13",
    basePrice: "1,199.99€",
    oldPrice: "1,399.99€",
    discount: "-14%",
    rating: "★★★★☆",
    reviews: "850 reviews",
    colors: [
      {
        name: "Platinum Silver",
        price: "1,199.99€",
        images: [
          "https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-13-Plus-BD-Price-1.jpg"
        ]
      },
      {
        name: "Frost White",
        price: "1,199.99€",
        images: [
          "https://cdn11.bigcommerce.com/s-r4tr0/images/stencil/645x645/products/266111/445463/XPS-13_white_two-devices-v2-scaled__85014.1723560164.jpg?c=2"
        ]
      }
    ],
    description: "Compact laptop with stunning InfinityEdge display and high performance.",
    stock: "In stock"
  },
  8: {
    name: "Bose SoundLink Revolve",
    basePrice: "199.99€",
    oldPrice: "229.99€",
    discount: "-13%",
    rating: "★★★★★",
    reviews: "1,800 reviews",
    colors: [
      {
        name: "Black",
        price: "199.99€",
        images: [
          "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/b/o/bos5722720_1.jpeg"
        ]
      },
      {
        name: "Silver",
        price: "199.99€",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5o_NJsV3nCSBIFycebrx5mptmDZWGrbMxoQ&s"
        ]
      }
    ],
    description: "Portable Bluetooth speaker with 360-degree sound.",
    stock: "In stock"
  },
  9: {
    name: "Apple Watch Series 7",
    basePrice: "429.99€",
    oldPrice: "499.99€",
    discount: "-14%",
    rating: "★★★★★",
    reviews: "1,500 reviews",
    colors: [
      {
        name: "Green",
        price: "429.99€",
        images: [
          "https://photos5.appleinsider.com/price_guide/apple-watch-series-7-pp-header.png"
        ]
      },
      {
        name: "Blue",
        price: "429.99€",
        images: [
          "https://d2xamzlzrdbdbn.cloudfront.net/products/6762613e-a50f-445f-8be6-bc5e70949f0d21070641_416x416.jpg"
        ]
      }
    ],
    description: "Smartwatch with advanced health tracking features.",
    stock: "In stock"
  },
  10: {
    name: "Nikon D3500",
    basePrice: "499.99€",
    oldPrice: "549.99€",
    discount: "-9%",
    rating: "★★★★☆",
    reviews: "700 reviews",
    colors: [
      {
        name: "Black",
        price: "499.99€",
        images: [
          "https://images.cdn.us-central1.gcp.commercetools.com/f7c8f2bb-aff1-4581-a826-1ad2527be222/Top-1590_D3500_top-472CaH3A.png"
        ]
      }
    ],
    description: "Beginner-friendly DSLR camera with 24.2 MP sensor.",
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

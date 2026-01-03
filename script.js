function goPage(page) {
  window.location.href = page;
}

/* DARK MODE – WORKS ON ALL PAGES */
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

/* KEEP DARK MODE AFTER PAGE CHANGE */
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};


// categeries
function toggleCategories(event) {
  event.stopPropagation(); // prevent closing immediately
  const dropdown = event.currentTarget.parentElement;
  dropdown.classList.toggle("open");
}

/* close dropdown when clicking outside */
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach(drop => {
    drop.classList.remove("open");
  });
});



// fetch
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    updateCartCount(); // ✅ VERY IMPORTANT
  });


// PRODUCTS DATA (ADD 11, 20, ANY NUMBER HERE)
// 1️⃣ PRODUCTS DATA (TOP)
// first products in index
const indexProducts = [
  {
    id:1,
    title: "Handmade Gift",
    price: 850,
    oldPrice: 1200,
    rating: 4.8,
    img: "./images/gifts1.webp"
  },
  {
     id:2,
    title: "Custom Photo Cards",
    price: 1800,
    oldPrice: 2500,
    rating: 4.7,
    img: "./images/wp2.webp"
  },
  {
     id:3,
    title: "Portrait Frame",
    price: 5200,
    oldPrice: 6500,
    rating: 4.9,
    img: "./images/wp3.avif"
  },
  {
     id:4,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:5,
    title: "Luxury Gift Box",
    price: 9000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:6,
    title: "Luxury Gift Box",
    price: 66000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:7,
    title: "Luxury Gift Box",
    price: 4000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:8,
    title: "Luxury Gift Box",
    price: 8000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:9,
    title: "Luxury Gift Box",
    price: 5000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:10,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:11,
    title: "Luxury Gift Box",
    price: 1000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:12,
    title: "Luxury Gift Box",
    price: 2000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
];

// 2️⃣ GRID ELEMENT
const grid = document.getElementById("productsGrid");

// 3️⃣ RENDER FUNCTION
function renderProducts(list, gridId, showCartBtn = false) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <div class="product-card">

      <!-- IMAGE CLICK → PRODUCT PAGE -->
      <a href="product.html?id=${p.id}" class="product-link">
        <img src="${p.img}">
      </a>

      <!-- TITLE -->
      <div class="product-title">${p.title}</div>

      <!-- RATING -->
      <div class="rating">${p.rating} ★</div>

      <!-- PRICE -->
      <div class="price-row">
        <span class="price">₹${p.price} </span>
        <span class="old-price">₹${p.oldPrice}</span>
      </div>

      <!-- 👇 SHOW ONLY ON INDEX PAGE -->
      ${
        !showCartBtn
          ? `<div class="more-like">More like this →</div>`
          : ""
      }

      <!-- 👇 SHOW ONLY ON PRODUCT PAGE -->
      ${
        showCartBtn
          ? `<button class="add-cart" onclick="addToCart(${p.id})">
                Add to cart
             </button>`
          : ""
      }

    </div>
  `).join("");
}




// 4️⃣ SHOW ALL PRODUCTS ON PAGE LOAD
// SHOW PRODUCTS ON PAGE LOAD
// renderProducts(products, "productsGrid");
// renderProducts(products2, "productsGrid2");

// 5️⃣ PRICE FILTER FUNCTION  ✅ WRITE HERE
function filterPrice(min, max) {
  const filtered = indexProducts.filter(
    p => p.price >= min && p.price <= max
  );
  renderProducts(filtered, "productsGrid", false);
  closeFilter();
}


// 6️⃣ FILTER PANEL OPEN / CLOSE
function openFilter() {
  document.getElementById("filterPanel").classList.add("open");
  document.getElementById("filterOverlay").classList.add("show");
}

function closeFilter() {
  document.getElementById("filterPanel").classList.remove("open");
  document.getElementById("filterOverlay").classList.remove("show");
}



// last
const productPageProducts = [
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp5.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
   img: "./images/wp5.avif"
  },
];


// best selling products 
// second products in index page
const bestSellingProducts = [
  {
    id: 101,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 5.0,
    img: "./images/wp5.avif"
  },
  {
    id: 102,
    title: "Personalized Jewelry Box",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
    img: "./images/wp4.avif"
  },
  {
    id: 103,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
    img: "./images/wp2.webp"
  },
  {
    id: 104,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
   img: "./images/wp5.avif"
  },
  {
    id: 105,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 9382,
    rating: 4.6,
    img: "./images/wp2.webp"
  },
  {
    id: 106,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
   img: "./images/wp5.avif"
  },
  {
    id: 107,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 6382,
    rating: 4.6,
    img: "./images/wp2.webp"
  },
  {
    id: 108,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 4425,
    rating: 4.5,
   img: "./images/wp5.avif"
  },
  {
    id: 109,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
    img: "./images/wp2.webp"
  },
  {
    id: 110,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 225,
    rating: 4.5,
   img: "./images/wp5.avif"
  },
  {
    id: 112,
    title: "Wood Docking Station",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
    img: "./images/wp2.webp"
  },
  {
    id: 113,
    title: "Engraved Espresso Cup",
    price: 543,
    oldPrice: 2325,
    rating: 4.5,
   img: "./images/wp5.avif"
  },
];

// second filter
function openFilter2() {
  document.getElementById("filterPanel2").classList.add("open");
  document.getElementById("filterOverlay2").classList.add("show");
}

function closeFilter2() {
  document.getElementById("filterPanel2").classList.remove("open");
  document.getElementById("filterOverlay2").classList.remove("show");
}

function filterPrice2(min, max) {
  const filtered = bestSellingProducts.filter(
    p => p.price >= min && p.price <= max
  );

  renderProducts(filtered, "productsGrid2");
  closeFilter2();
}

// -----------




// // RENDER ON LOAD
// renderProducts(products, "productsGrid");
// renderProducts(products2, "productsGrid2");


// cart 
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product =
    productPageProducts.find(p => p.id === id) ||
    indexProducts.find(p => p.id === id);

  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}


// count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cart.length;
}


// cart items----------
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your basket is empty.</p>";
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="etsy-cart-card">

      <div class="seller-row">
        <strong>WildWatches</strong>
        <span class="rating">⭐ ${item.rating} (3.3k)</span>
        <span class="dots">•••</span>
      </div>

      <div class="cart-main">
        <img src="${item.img}" class="cart-img">

        <div class="cart-details">
          <h3>${item.title}</h3>

          <span class="option">Custom Engraving: No Engraving</span>

          <p class="sale">Sale ends 04 January</p>

          <div class="cart-actions">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

            <span>Edit</span>
            <span>Save for later</span>
            <span onclick="removeFromCart(${index})" class="remove">Remove</span>
          </div>
        </div>

        <div class="cart-price">
          <span class="discount">25% off</span>
          <h2>₹ ${item.price}</h2>
          <del>₹ ${item.oldPrice}</del>
        </div>
      </div>

      <div class="delivery">
        Delivery: <strong>₹ 890</strong> (Get it by 12 Jan – 09 Feb)
      </div>

    </div>
  `).join("");
}


function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

// ----------
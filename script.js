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
    });



// PRODUCTS DATA (ADD 11, 20, ANY NUMBER HERE)
// 1️⃣ PRODUCTS DATA (TOP)
const products = [
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
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:6,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:7,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:8,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:9,
    title: "Luxury Gift Box",
    price: 12000,
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
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
  {
     id:12,
    title: "Luxury Gift Box",
    price: 12000,
    oldPrice: 15000,
    rating: 5.0,
    img: "./images/wp6.webp"
  },
];

// 2️⃣ GRID ELEMENT
const grid = document.getElementById("productsGrid");

// 3️⃣ RENDER FUNCTION
function renderProducts(list, gridId) {
  const grid = document.getElementById(gridId);

  grid.innerHTML = list.map(p => `
    <a href="product.html?id=${p.id ?? ""}" class="product-link">
      <div class="product-card">
        <img src="${p.img}">
        <div class="product-title">${p.title}</div>
        <div class="rating">${p.rating} ★</div>
        <div>
          <span class="price">₹${p.price}</span>
          <span class="old-price">₹${p.oldPrice}</span>
        </div>
        <div class="more-like">More like this →</div>
      </div>
    </a>
  `).join("");
}



// 4️⃣ SHOW ALL PRODUCTS ON PAGE LOAD
// SHOW PRODUCTS ON PAGE LOAD
// renderProducts(products, "productsGrid");
// renderProducts(products2, "productsGrid2");

// 5️⃣ PRICE FILTER FUNCTION  ✅ WRITE HERE
function filterPrice(min, max) {
  const filtered = products.filter(
    p => p.price >= min && p.price <= max
  );
  renderProducts(filtered, "productsGrid");
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
const products2 = [
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
  {
    id: 101,
    title: "Leather Camera Strap",
    price: 2054,
    oldPrice: 4109,
    rating: 4.8,
    img: "./images/wp2.webp"
  },
  {
    id: 102,
    title: "Engraved Espresso Cup",
    price: 1743,
    oldPrice: 2325,
    rating: 4.5,
    img: "./images/wp4.avif"
  },
];

// RENDER ON LOAD
renderProducts(products, "productsGrid");
renderProducts(products2, "productsGrid2");



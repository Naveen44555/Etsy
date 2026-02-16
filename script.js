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
function goToShops() {
  const targetPage = "index.html"; // page where section exists

  if (window.location.pathname.includes("index.html")) {
    // already on page → just scroll
    document.getElementById("shops").scrollIntoView({
      behavior: "smooth"
    });
  } else {
    // different page → go to page + section
    window.location.href = targetPage + "#shops";
  }
}
window.addEventListener("load", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
});


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
    updateCartCount(); // VERY IMPORTANT
  });


// PRODUCTS DATA (ADD 11, 20, ANY NUMBER HERE)
// 1️⃣ PRODUCTS DATA (TOP)
// first products in index
const indexProducts = [
  {
    id:1,
    title: "Gifts for baby boy & girl",
    price: 150,
    oldPrice: 200,
    rating: 4.8,
    img: "./images1/index_images/inimg1.webp"
  },
  {
     id:2,
    title: "Hand Chain Gold Plated ",
    price: 499,
    oldPrice: 1000,
    rating: 4.1,
    img: "./images1/index_images/inimg2.webp"
  },
  {
     id:3,
    title: "Personalised camera strap ",
    price: 19299,
    oldPrice: 26500,
    rating: 4.9,
    img: "./images1/index_images/inimg4.webp"
  },
  {
     id:4,
    title: "Sketch Portrait Hoodies",
    price: 900,
    oldPrice: 1500,
    rating: 4.4,
    img: "./images1/index_images/inimg5.avif"
  },
  {
     id:5,
    title: "Couple gift frames ",
    price: 300,
    oldPrice: 500,
    rating: 4.7,
    img: "./images1/index_images/inimg3.webp"
  },
  {
     id:6,
    title: "Personalised Name Bags ",
    price: 777,
    oldPrice: 1000,
    rating: 4.3,
   img: "./images1/index_images/inimg6.avif"
  },
  {
     id:7,
    title: "Play Dough Christmas ",
    price: 2000,
    oldPrice: 3000,
    rating: 3.1,
    img: "./images1/index_images/inimg11.webp"
  },
  {
     id:8,
    title: "Striped Border wall",
    price: 800,
    oldPrice: 1500,
    rating: 4.1,
    img: "./images1/index_images/inimg7.webp"
  },
  {
     id:9,
    title: "Wood Printed Names",
    price: 199,
    oldPrice: 400,
    rating: 3.8,
    img: "./images1/index_images/inimg14.avif"
  },
  {
     id:10,
    title: "Personalise Ribbons",
    price: 100,
    oldPrice: 300,
    rating: 4.6,
   img: "./images1/index_images/inimg10.avif"
  },
  {
     id:11,
    title: "Trip bags Full Leather",
    price: 1000,
    oldPrice: 15000,
    rating: 4.5,
    img: "./images1/index_images/inimg12.avif"
  },
  {
     id:12,
    title: "women Gold Necklace",
    price: 2000,
    oldPrice: 3000,
    rating: 4.4,
   img: "./images1/index_images/inimg13.avif"
  },
];

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".gift-guides")?.classList.add("show");
  }, 600); // ⏱ 1 second
});


// 2️⃣ GRID ELEMENT
const grid = document.getElementById("productsGrid");

// 3️⃣ RENDER FUNCTION
function renderProducts(list, gridId, showCartBtn = false, showMoreLike = false) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <div class="product-card">

      <a href="product.html?id=${p.id}">
        <img src="${p.img}">
      </a>

      <div class="product-title">${p.title}</div>
      <div class="rating">${p.rating} ★</div>

      <div>
        <span class="price">₹${p.price}</span>
        <span class="old-price">₹${p.oldPrice}</span>
      </div>

      ${
        showMoreLike
          ? `<div class="more-like">More like this →</div>`
          : ""
      }

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
    title: "baby boy & Girl dolls",
    price: 755,
    oldPrice: 910,
    rating: 4.4,
     img: "./images1/index_images/inimg70.webp"
  },
  {
    id: 102,
    title: "Men Pocket wear golden",
    price: 1042,
    oldPrice: 1488,
    rating: 3.9,
     img: "./images1/product_images/prr1.png"
  },
  {
    id: 103,
    title: "women carry bags multi",
    price: 210,
    oldPrice: 482,
    rating: 4.6,
     img: "./images1/product_images/prr2.avif"
  },
  {
    id: 104,
    title: "hand t-shirts Art",
    price: 355,
    oldPrice: 510,
    rating: 4.7,
      img: "./images1/product_images/prr18.avif"
  },
  {
    id: 105,
    title: "Floers card decoration",
    price: 142,
    oldPrice: 188,
    rating: 3.9,
      img: "./images1/product_images/prr3.webp"
  },
  {
    id: 106,
    title: "thread Names with colors ",
    price: 210,
    oldPrice: 382,
    rating: 4.6,
     img: "./images1/product_images/prr4.avif"
  },
  {
    id: 107,
    title: "golden with silver wear",
    price: 355,
    oldPrice: 510,
    rating: 4.6,
      img: "./images1/product_images/prr5.avif"
  },
  {
    id: 108,
    title: "Personalized wallets",
    price: 142,
    oldPrice: 188,
    rating: 3.9,
      img: "./images1/product_images/prr6.webp"
  },
  {
    id: 109,
     title: "Travel Carry bags",
    price: 2410,
    oldPrice: 4382,
    rating: 4.3,
     img: "./images1/product_images/prr7.webp"
  },
  {
    id: 110,
    title: "personal carry wallet ",
    price: 3755,
    oldPrice: 7510,
    rating: 4.4,
      img: "./images1/product_images/prr8.webp"
  },
  {
    id: 111,
    title: "zip wallets pack of 4",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
      img: "./images1/product_images/prr9.avif"
  },
  {
    id: 112,
    title: "Home decoration light",
    price: 2410,
    oldPrice: 4382,
    rating: 3.9,
     img: "./images1/product_images/prr10.avif"
  },
  {
    id: 113,
      title: "camera carry box",
    price: 1042,
    price: 755,
    oldPrice: 1510,
    rating: 4.3,
      img: "./images1/product_images/prr11.avif"
  },
  {
    id: 114,
    title: "Mobile adapter yellow",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
      img: "./images1/product_images/prr12.webp"
  },
  {
    id: 115,
   title: "Robotics",
    price: 2410,
    oldPrice: 4382,
    rating: 3.6,
    img: "./images1/product_images/prr13.avif"
  },
  {
    id: 116,
     title: "Cats pictures set",
    price: 3755,
    oldPrice: 7510,
    rating: 4.8,
      img: "./images1/product_images/prr14.avif"
  },
  {
    id: 117,
     title: "Hand sleeves t-shirts",
    price: 1042,
    oldPrice: 1488,
    rating: 4.9,
      img: "./images1/product_images/prr18.avif"
  },
  {
    id: 118,
     title: "Glass with Flowers",
    price: 410,
    oldPrice: 482,
    rating: 3.6,
     img: "./images1/product_images/prr16.webp"
  },
  {
    id: 119,
     title: "Love spin",
    price: 102,
    oldPrice: 148,
    rating: 4.9,
      img: "./images1/product_images/prr17.webp"
  },

  {
    id: 120,
    title: "Nave Necklace with white",
    price: 1042,
    oldPrice: 1488,
    rating: 3.9,
      img: "./images1/product_images/prr15.avif"
  },
  {
    id: 121,
    title: "small trip carry bag",
    price: 410,
    oldPrice: 482,
    rating: 4.6,
     img: "./images1/product_images/prr19.webp"
  },
  {
    id: 122,
    title: "Mobile cover simple",
    price: 1042,
    oldPrice: 1488,
    rating: 3.7,
     img: "./images1/product_images/prr20.webp"
  },
  {
    id: 123,
    title: "Apple cover with logo",
    price: 2410,
    oldPrice: 4382,
    rating: 4.1,
     img: "./images1/product_images/prr21.webp"
  },
  {
    id: 124,
    title: "Mobile Temporal glass",
    price: 1042,
    oldPrice: 1488,
    rating: 4.1,
      img: "./images1/product_images/prr22.webp"
  },
  {
    id: 125,
    title: "Camera with lens",
    price: 24410,
    oldPrice: 3382,
    rating: 3.8,
    img: "./images1/product_images/prr23.webp"
  },
  {
    id: 126,
    title: "Hummingbird Glass Art",
    price: 3755,
    oldPrice: 7510,
    rating: 3.8,
    img: "./images1/product_images/prr24.webp"
  },
  {
    id: 127,
    title: "Headphonw with black",
    price: 1042,
    oldPrice: 1488,
    rating: 3.9,
    img: "./images1/product_images/prr25.avif"
  },
  {
    id: 128,
    title: "Women clothes",
    price: 2410,
    oldPrice: 4382,
    rating: 4.1,
     img: "./images1/product_images/prr26.avif"
  },
  {
    id: 129,
    title: "wooden ladder",
    price: 1042,
    oldPrice: 1488,
    rating: 4.1,
  img: "./images1/product_images/prr29.webp"
  },
  {
    id: 130,
    title: "Towels Fresh with colors",
    price: 2410,
    oldPrice: 4382,
    rating: 4.2,
  img: "./images1/product_images/prr27.avif"
  },
  {
    id: 131,
    title: "dinner plates with spon",
    price: 1042,
    oldPrice: 1488,
    rating: 4.2,
    img: "./images1/product_images/prr28.webp"
  },
  {
    id: 132,
    title: "Flowers multi",
    price: 2410,
    oldPrice: 4382,
    rating: 4.6,
    img: "./images1/product_images/prr30.webp"
  },
];


// indedpage 2 products best selling products 
// second products in index page
const bestSellingProducts = [
  {
    id: 101,
   title:"dall Gifts Handmade",
    price: 755,
    oldPrice: 910,
    rating: 5.0,
     img: "./images1/index_images/inimg70.webp"
  },
  {
    id: 102,
    title: "Custon mugs Name",
    price: 142,
    oldPrice: 188,
    rating: 4.9,
    img: "./images1/index_images/inimg71.webp"
  },
  {
    id: 103,
    title: "Personalised Intial Necklace",
    price: 240,
    oldPrice: 382,
    rating: 4.6,
    img: "./images1/index_images/inimg72.webp"
  },
  {
    id: 104,
    title: "EMbroiderd Sleep Mask",
   price: 210,
    oldPrice: 382,
    rating: 4.6,
   img: "./images1/index_images/inimg73.webp"
  },
  {
    id: 105,
    title: "Letter Keychains ",
    price: 110,
    oldPrice: 382,
    rating: 4.6,
    img: "./images1/index_images/inimg74.webp"
  },
  {
    id: 106,
    title: "Embroided Pets",
    price: 143,
    oldPrice: 325,
    rating: 4.5,
   img: "./images1/index_images/inimg75.webp"
  },
  {
    id: 107,
    title: "Hand-Drawn Houses",
    price: 99,
    oldPrice: 182,
    rating: 4.6,
    img: "./images1/index_images/inimg76.webp"
  },
  {
    id: 108,
    title: "Folk Paintaings",
    price: 743,
    oldPrice: 1025,
    rating: 4.5,
  img: "./images1/index_images/inimg77.webp"
  },
  {
    id: 109,
    title: "Necklace Models",
    price: 1110,
    oldPrice: 1382,
    rating: 4.6,
    img: "./images1/index_images/inimg78.webp"
  },
  {
    id: 110,
    title: "down Bed Pillows",
    price: 143,
    oldPrice: 225,
    rating: 4.5,
  img: "./images1/index_images/inimg79.webp"
  },
  {
    id: 112,
    title: "Handmade Towels",
    price: 410,
    oldPrice: 482,
    rating: 4.6,
    img: "./images1/index_images/inimg80.webp"
  },
  {
    id: 113,
    title: "Color Pillow Lines",
    price: 243,
    oldPrice: 325,
    rating: 4.5,
   img: "./images1/index_images/inimg81.webp"
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

// picsresolution products
const picsPageProducts = [
  {
    id: 201,
    img: "./images1/pics11/pics21.avif",
    title: "Home Doecors",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 202,
     img: "./images1/pics11/pics25.webp",
     title: "Kid dress",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 203,
     img: "./images1/pics11/pics24.webp",
    title: "Ballon Decor",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 204,
    img: "./images1/pics11/pics23.avif",
     title: "Table Decor",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 205,
    img: "./images1/pics11/pics22.webp",
    title: "Book Tables",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 206,
   img: "./images1/pics11/pics27.webp",
     title: "Anniversary Rings ",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 207,
    img: "./images1/pics11/pics28.webp",
    title: "Enagement Rings",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 208,
     img: "./images1/pics11/pics29.webp",
     title: "Ring New Model",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 201,
     img: "./images1/pics11/pics30.webp",
    title: "Hand Love Arts",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 202,
    img: "./images1/pics11/pics31.webp",
     title: "Hand Art Prints",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 201,
     img: "./images1/pics11/pics33.webp",
    title: "Hand Prefers",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 202,
    img: "./images1/pics11/pics34.webp",
     title: "Hand Toys",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 201,
    img: "./images1/pics11/pics35.webp",
    title: "Hanuman Gift",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 202,
    img: "./images1/pics11/pics36.webp",
     title: "Little Hearts",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 202,
    img: "./images1/pics11/pics21.avif",
   title: "Decors Items",
    price: 499,
     oldPrice: 2499,
    rating: 4.5
  },
  {
    id: 202,
     img: "./images1/pics11/pics3.avif",
    title: "Decor Bottles",
    price: 1799,
     oldPrice: 2499,
    rating: 4.9
  },
  {
    id: 202,
      img: "./images1/pics11/pics9.avif",
     title: "Art Printed Gifts",
    price: 499,
     oldPrice: 2499,
    rating: 4.5
  },
  {
   id: 202,
     img: "./images1/pics11/pics20.avif",
    title: "Home Needs",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
  {
    id: 202,
      img: "./images1/pics11/pics5.webp",
    title:"Home Decors",
    price: 499,
     oldPrice: 2499,
    rating: 4.5
  },
  {
    id: 202,
     img: "./images1/pics11/pics19.avif",
    title: "Door curtains",
    price: 1299,
     oldPrice: 2499,
    rating: 4.7
  },
];

// pics products
document.addEventListener("DOMContentLoaded", () => {

  // 👇 pics.html products
  if (document.getElementById("picsGrid")) {
    renderProducts(picsPageProducts, "picsGrid", true);
  }

});


// home fav------------
// PRODUCTS FOR HOMEFAV PAGE

const homefavProducts = [
  {
    id: 301,
    title: "Elegant Chairs",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    img: "./images1/pics11/pics60.webp"
  },
  {
    id: 302,
    title: "Rocking Chairs",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
     img: "./images1/pics11/pics43.webp"
  },
  {
    id: 303,
    title: "Dining chairs",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
     img: "./images1/pics11/pics56.webp"
  },
  {
    id: 304,
    title: "Cafe Chairs",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
   img: "./images1/pics11/pics55.webp"
  },
  {
    id: 305,
    title: "Elevate Evaey Meal",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
    img: "./images/homefav2.png"
  },
  {
    id: 306,
    title: "Home Decor",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
      img: "./images1/pics11/pics64.jpg"
  },
  {
    id: 307,
    title: "Family seating",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
      img: "./images1/pics11/pics50.webp"
  },
  {
    id: 308,
    title: "Style stool",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
     img: "./images1/pics11/pics42.webp"
  },
  {
    id: 309,
    title: "Handmade Bed Decor",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
     img: "./images1/pics11/pics69.webp"
  },
  {
    id: 310,
    title: "Elegant Cozy inviting",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
     img: "./images1/pics11/pics45.avif"
  },
  {
    id: 311,
    title: "Element Media & storage",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
     img: "./images1/pics11/pics54.avif"
  },
  {
    id: 312,
    title: "Modern Chairs",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
   img: "./images1/pics11/pics61.webp"
  },
  {
    id: 313,
    title: "Bedcult Furniture",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
     img: "./images1/pics11/pics62.webp"
  },
  {
    id: 314,
    title: "Montana Furniture",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
    img: "./images1/pics11/pics63.jpg"
  },
  {
    id: 315,
    title: "Modern Furniture",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
     img: "./images1/pics11/pics50.webp"
  
  },
  {
    id: 316,
    title: "Study Tables",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
     img: "./images1/pics11/pics65.jpg"
  },
  {
    id: 317,
    title: "Dining Tables",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
      img: "./images1/pics11/pics68.webp"
  },
  {
    id: 318,
    title: "Office Furniture",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
    img: "./images1/pics11/pics67.jpg"
  },
  {
    id: 319,
    title: "Modern Futniture",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
     img: "./images1/pics11/pics66.jpg"
  },
  {
    id: 320,
    title: "Official Chairs",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
    img: "./images/homefav2.png"
  }
  
];


// home favoruites---------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    const homeFav = document.querySelector(".homefav-wrapper");
    if (homeFav) {
      homeFav.classList.add("show");
    }
  }, 200); // 1 second delay
});

// end------



const fashionData = {
  men: [
    { name: "T Shirt", img:"./images/fashion2.png"   },
    { name: "Casual Shirts", img: "./images1/fashion/gym6.webp" },
    { name: "Formal Shirts",  img: "./images1/fashion/gym7.webp"  },
    { name: "Sweatshirts", img: "./images1/fashion/gym8.webp" },
    { name: "shorts", img:  "./images1/fashion/gym9.webp"  },
    { name: "Jeans",img: "./images1/fashion/gym3.webp" },
  ],
  women: [
    { name: "Fashion", img: "./images1/fashion/gym2.webp"},
    { name: "Tops", img: "./images/fashion1.webp" },
    { name: "Shirts", img: "./images1/fashion/gym5.webp" },
    { name: "blazer", img: "./images1/fashion/gym10.avif"},
    { name: "Modern", img:  "./images1/fashion/gym12.jpg"  },
    { name: "Jeans", img: "./images1/fashion/gym13.jpg" },
  ],
  kids: [
    { name: "Kids Modern",img: "./images1/fashion/gym14.jpg"   },
    { name: "Kids Trendy",img: "./images1/fashion/gym15.jpg"   },
    { name: "Kids Gouns",img: "./images1/fashion/gym16.jpg"  },
    { name: "Kids Trendy", img: "./images1/fashion/gym18.jpg"  },
    { name: "Kids Blazer",  img: "./images1/fashion/gym19.jpg"  },
    { name: "Kids Moderns", img: "./images1/fashion/gym17.jpg"  },
  ]
};

/* =========================
   RENDER (FIXED ID)
========================= */

function renderFashion(category) {
  const grid = document.getElementById("fashionid4");
  grid.innerHTML = fashionData[category].map(item => `
    <div class="fashion-card" onclick="goCategory('${item.name}')">
      <img src="${item.img}" alt="${item.name}">
      <span>${item.name}</span>
    </div>
  `).join("");
}


// function renderFashion(category) {
//   const grid = document.getElementById("fashionid4");

//   if (!grid) return; // Stop if element not present

//   if (!fashionData[category]) {
//     grid.innerHTML = "<p>No items found</p>";
//     return;
//   }

//   grid.innerHTML = fashionData[category]
//     .map(item => `
//       <div class="fashion-card" onclick="goCategory('${item.name}')">
//         <img src="${item.img}" alt="${item.name}">
//         <span>${item.name}</span>
//       </div>
//     `)
//     .join("");
// }


/* =========================
   TAB SWITCH (FIXED CLASSES)
========================= */
function showCategory(category) {
  document
    .querySelectorAll(".fashion-f2, .fashion-f3")
    .forEach(tab => tab.classList.remove("active"));

  event.target.classList.add("active");
  renderFashion(category);
}

/* =========================
   NAVIGATION
========================= */
function goCategory(name) {
  window.location.href =
    "fashion.html?category=" + encodeURIComponent(name);
}

/* DEFAULT LOAD */
renderFashion("men");

setTimeout(function () {
  document.querySelector(".fashion-c").style.display = "block";
}, 100);


// end-------------------------------
window.onload = function () {
    const token = localStorage.getItem("access_token");

    if (!token) {
        window.location.href = "http://localhost:3000";
    }
};



function logoutUser() {
    // Remove stored tokens
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Optional: clear any other user data
    localStorage.removeItem("username");

    // Redirect to login page
    window.location.href = "http://localhost:3000"; 
}




// fashion products all
const fashionProducts = [
  {
    id: 501,
    title: "Cotton T-shirt",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
   img: "./images1/fashion/gym20.avif"  
  },
  {
    id: 502,
    title: "Summer T-shirts",
    price: 1899,
    oldPrice: 2599,
    rating: 4.8,
      img: "./images1/fashion/gym21.avif"  
  },
  {
    id: 503,
    title: "Men Shirt",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
      img: "./images1/fashion/gym27.jpg"  
  },
  {
    id: 504,
    title: "Men Modern shirt",
    price: 2999,
    oldPrice: 3999,
    rating: 4.7,
      img: "./images1/fashion/gym28.jpg"  
  },
  {
    id: 505,
    title: "Men Cotton Shirt",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
     img: "./images1/fashion/gym30.jpg"  
  },
  {
    id: 506,
    title: "Men Summer Dress",
    price: 1899,
    oldPrice: 2599,
    rating: 4.8,
     img: "./images1/fashion/gym22.avif"  
  },
  {
    id: 507,
    title: "Slit-cuff Blazer",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
     img: "./images1/fashion/gym23.avif"  
  },
  {
    id: 508,
    title: "Men Formal Pants",
    price: 2999,
    oldPrice: 3999,
    rating: 4.7,
      img: "./images1/fashion/gym29.jpg"  
  },
  {
    id: 509,
    title: "Women Shirt",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    img: "./images1/fashion/gym25.jpg" 
  },
  {
    id: 510,
    title: "Women Summer Dress",
    price: 1899,
    oldPrice: 2599,
    rating: 4.8,
    img: "./images1/fashion/gym26.jpg" 
  },
  {
    id: 511,
    title: "Tangerine Saree",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
    img: "./images/fashion1.webp"
  },
  {
    id: 512,
    title: "women T-shirts",
    price: 2999,
    oldPrice: 3999,
    rating: 4.7,
     img: "./images1/fashion/gym24.jpg"  
  },
  {
    id: 513,
    title: "Women Red Blazer",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    img: "./images1/fashion/gym10.avif"  
  },
  {
    id: 514,
    title: "Women Hoodie",
    price: 1899,
    oldPrice: 2599,
    rating: 4.8,
     img: "./images1/fashion/gym31.jpg" 
  },
  {
    id: 515,
    title: "Men Modern shirt",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
    img: "./images1/fashion/m3.jpg" 
  },
  {
    id: 516,
    title: "Men Denim Jacket",
    price: 2999,
    oldPrice: 3999,
    rating: 4.7,
    img: "./images1/fashion/m4.jpg" 
  },
  {
    id: 517,
    title: "Men Cotton Shirt",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
     img: "./images1/fashion/m5.jpg" 
  },
  {
    id: 518,
    title: "Men Summer Dress",
    price: 1899,
    oldPrice: 2599,
    rating: 4.8,
    img: "./images1/fashion/m6.jpeg" 
  },
  {
    id: 519,
    title: "Fancy Jeans",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
    img: "./images1/fashion/m8.jpg" 
  },
  {
    id: 520,
    title: "Men Denim Pant",
    price: 2999,
    oldPrice: 3999,
    rating: 4.7,
     img: "./images1/fashion/m9.jpg" 
  },
];



// // RENDER ON LOAD
// renderProducts(products, "productsGrid");
// renderProducts(products2, "productsGrid2");


// cart 
// function addToCart(id) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const product =
//     productPageProducts.find(p => p.id === id) ||
//     indexProducts.find(p => p.id === id) ||
//     picsPageProducts.find(p => p.id === id);   // ✅ ADD THIS LINE

//   if (!product) return;

//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();
// }

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product =
    productPageProducts?.find(p => p.id === id) ||
    indexProducts?.find(p => p.id === id) ||
    homefavProducts?.find(p => p.id === id) ||
     fashionProducts.find(p => p.id === id) ||
    picsPageProducts?.find(p => p.id === id);

  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  showCartToast(product.title); // ✅ popup
}



// pop up added in cart 
function showCartToast() {
  const toast = document.getElementById("cartToast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
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
       
      </div>

      <div class="cart-main">
        <img src="${item.img}" class="cart-img">

        <div class="cart-details">
          <h3>${item.title}</h3>

          
          <p class="sale">Sale ends 04 January</p>

          <div class="cart-actions">
          
            <span>Save for later</span>
            <span onclick="removeFromCart(${index})" class="remove">Remove</span>
          </div>
        </div>

        <div class="cart-price">
          <h2>₹ ${item.price}</h2>
          <del>₹ ${item.oldPrice}</del>
        </div>
      </div>

      <div class="delivery">
        Delivery:  (Get it by 12 Jan – 09 Feb)
      </div>

    </div>
  `).join("");
}


// function removeFromCart(index) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   loadCart();
//   updateCartCount();
// }

//---------------------removeFromCart 

function removeFromCart(index) {
  const confirmRemove = confirm("Are you sure you want to remove this item from cart?");

  if (!confirmRemove) return; // ❌ stop if user clicks Cancel

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
  updateCartCount();
}

// expore gifts
 function goToPics() {
    document.getElementById("picsGrid").scrollIntoView({
      behavior: "smooth"
    });
  }



// ----------







// script.js – slider functionality for the home page
document.addEventListener("DOMContentLoaded", () => {
  // ---------- SLIDER DATA (3 shops with sales, one per category) ----------
  const slides = [
    {
      bgImage: "images/rush_store.png", // Large background photo
      logo: "images/rush logo.png", // Small logo box
      category: "FASHION SALE",
      title: "Rush – 30% Off",
      desc: "Limited time on new arrivals. Streetwear for every season.",
      btnText: "Shop Now",
    },
    {
      bgImage: "images/emerald_kitchen_store.png",
      logo: "images/emerald kitchen logo.png",
      category: "DINING OFFER",
      title: "Emerald Kitchen – Buy 1 Get 1",
      desc: "Free dessert with every main course. Book your table today.",
      btnText: "Reserve",
    },
    {
      bgImage: "images/mystic_organics_store.png",
      logo: "images/mystic organics logo.png",
      category: "BEAUTY DEAL",
      title: "Mystic Organics – 20% Off",
      desc: "Organic skincare and wellness products. Clean beauty for all.",
      btnText: "Shop Now",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");

  if (!sliderTrack || !dotsContainer) return;

  let currentIndex = 0;
  let autoInterval;

  // Build slides and dots
  function buildSlider() {
    sliderTrack.innerHTML = "";
    dotsContainer.innerHTML = "";

    slides.forEach((slide, idx) => {
      // slide element
      const slideDiv = document.createElement("div");
      slideDiv.className = "slide";
      slideDiv.style.backgroundImage = `url(${slide.bgImage})`;
      slideDiv.innerHTML = `
        <div class="slide-overlay">
          <img src="${slide.logo}" alt="Store Logo" class="slide-logo" />
          <span class="slide-category">${slide.category}</span>
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-desc">${slide.desc}</p>
          <button class="slide-btn" data-slide-index="${idx}">${slide.btnText}</button>
        </div>
      `;
      sliderTrack.appendChild(slideDiv);

      // dot
      const dot = document.createElement("div");
      dot.className = `dot ${idx === currentIndex ? "active" : ""}`;
      dot.addEventListener("click", () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === currentIndex) dot.classList.add("active");
      else dot.classList.remove("active");
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const slideWidth = sliderTrack.clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
    resetAutoSlide();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const slideWidth = sliderTrack.clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
  }

  function resetAutoSlide() {
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(() => nextSlide(), 5000);
  }

  // handle window resize to recalculate slide width
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const slideWidth = sliderTrack.clientWidth;
      sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }, 100);
  });

  // initial build and start
  buildSlider();
  // ensure track width after build
  setTimeout(() => {
    const slideWidth = sliderTrack.clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }, 20);
  resetAutoSlide();

  // handle button clicks (optional: you can add alert or redirect)
  sliderTrack.addEventListener("click", (e) => {
    const btn = e.target.closest(".slide-btn");
    if (btn) {
      const idx = btn.getAttribute("data-slide-index");
      alert(
        `You clicked "${slides[idx].title}" – this would open the store page.`,
      );
    }
  });
});

/********shops js  *********/
// ========== STORE DIRECTORY DATA & RENDERING ==========
if (document.getElementById("storesContainer")) {
  // Complete store list (17 stores)
  const stores = [
    {
      id: 1,
      name: "Maison Eclat",
      category: "Clothing & Fashion",
      logo: "images/maison_eclat_store.png",
      description: "Luxury French-inspired fashion",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 2,
      name: "The Artisan Collective",
      category: "Clothing & Fashion",
      logo: "images/the_artisan_collective_store.png",
      description: "Handcrafted apparel",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 3,
      name: "Rush",
      category: "Clothing & Fashion",
      logo: "images/rush_store.png",
      description: "Gym wear and accessories",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 4,
      name: "Lux Atelier",
      category: "Clothing & Fashion",
      logo: "images/lux_atelier_store.png",
      description: "Street fashion",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 5,
      name: "Mystic Organics",
      category: "Beauty",
      logo: "images/mystic_organics_store.png",
      description: "Organic skincare",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 6,
      name: "Cacos",
      category: "Beauty",
      logo: "images/cacos_store.png",
      description: "Colorful cosmetics",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 7,
      name: "Scent & Co",
      category: "Beauty",
      logo: "images/scents_&_co_store.png",
      description: "Luxury perfumes",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 8,
      name: "Emerald Kitchen",
      category: "Dining",
      logo: "images/emerald_kitchen_store.png",
      description: "Farm-to-table fine dining",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 9,
      name: "Verdant Bistro",
      category: "Dining",
      logo: "images/verdant_bistro_store.png",
      description: "Vegetarian & vegan bistro",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 10,
      name: "Majimbos",
      category: "Dining",
      logo: "images/majimbos_ store.png",
      description: "Caribbean & Latin cuisine",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 11,
      name: "Reyes De La Pizza",
      category: "Dining",
      logo: "images/reyes_de_la_ pizza_store.png ",
      description: "Caribbean & Latin cuisine",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 12,
      name: "Chicken Box",
      category: "Dining",
      logo: "images/chicken_box_store.png",
      description: "Caribbean & Latin cuisine",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 13,
      name: "Sonic Audio",
      category: "Technology",
      logo: "images/sonic_audio_store.png",
      description: "High-end headphones & speakers",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 14,
      name: "Cell Zone",
      category: "Technology",
      logo: "images/cell_zone_store.png",
      description: "Smartphones & repairs",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 15,
      name: "Fresh Market",
      category: "Grocery",
      logo: "images/freshmart_store.png",
      description: "Fresh produce & organic groceries",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 16,
      name: "Beacon Supermarket",
      category: "Grocery",
      logo: "images/beacon_suparmarket_store.png",
      description: "Everyday grocery & bakery",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
    {
      id: 17,
      name: "MediCore",
      category: "Pharmacy",
      logo: "images/medicore_store.png",
      description: "Prescriptions & health products",
      hours: "Mon - Sat: 9:00 AM - 16:00 PM",
      location: "2nd Floor, West Wing",
    },
  ];

  // Get unique categories and add "All"
  const categories = [...new Set(stores.map((s) => s.category))].sort();
  const allCategories = ["All", ...categories];

  let activeCategory = "All";
  const chipList = document.getElementById("chipList");
  const storesContainer = document.getElementById("storesContainer");
  const searchInput = document.getElementById("searchInput");

  function renderChips() {
    chipList.innerHTML = "";
    allCategories.forEach((cat) => {
      const chip = document.createElement("div");
      chip.className = `chip ${activeCategory === cat ? "active" : ""}`;
      let icon = "";
      if (cat === "Clothing & Fashion") icon = "checkroom";
      else if (cat === "Beauty") icon = "spa";
      else if (cat === "Dining") icon = "restaurant";
      else if (cat === "Technology") icon = "devices";
      else if (cat === "Grocery") icon = "local_grocery_store";
      else if (cat === "Pharmacy") icon = "medication";
      else if (cat === "All") icon = "apps";
      chip.innerHTML = `<span class="material-symbols-outlined">${icon}</span><span>${cat}</span>`;
      chip.addEventListener("click", () => {
        activeCategory = cat;
        renderChips();
        renderStores();
      });
      chipList.appendChild(chip);
    });
  }

  function renderStores() {
    const searchQuery = searchInput.value.toLowerCase().trim();
    let filteredStores = stores;
    if (activeCategory !== "All") {
      filteredStores = filteredStores.filter(
        (store) => store.category === activeCategory,
      );
    }
    if (searchQuery) {
      filteredStores = filteredStores.filter(
        (store) =>
          store.name.toLowerCase().includes(searchQuery) ||
          store.description.toLowerCase().includes(searchQuery),
      );
    }

    // Group by category
    const grouped = {};
    filteredStores.forEach((store) => {
      if (!grouped[store.category]) grouped[store.category] = [];
      grouped[store.category].push(store);
    });

    if (Object.keys(grouped).length === 0) {
      storesContainer.innerHTML = `<p class="no-stores-message">No stores found.</p>`;
      return;
    }

    let html = "";
    Object.keys(grouped)
      .sort()
      .forEach((cat) => {
        html += `<div class="store-category">`;
        html += `<h2 class="category-heading">${cat}</h2>`;
        html += `<div class="stores-grid">`;
        grouped[cat].forEach((store) => {
          html += `
          <div class="store-card">
            <img src="${store.logo}" alt="${store.name}" class="store-logo">
            <div class="store-info">
              <h3>${store.name}</h3>
              <p>${store.description}</p>
              <p>${store.hours}</p>
              <p>${store.location}</p>
              <a href="${store.name}.html" class="store-link">View Store →</a>
            </div>
          </div>
        `;
        });
        html += `</div></div>`;
      });
    storesContainer.innerHTML = html;
  }

  // Initialize
  renderChips();
  renderStores();

  // Search event
  searchInput.addEventListener("input", renderStores);
}

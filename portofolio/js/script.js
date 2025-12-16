// ================= PAGE LOAD =================
window.addEventListener("load", function () {
  document.documentElement.style.visibility = "visible";
  document.documentElement.style.opacity = "1";

  // Refresh AOS after load
  setTimeout(() => {
    if (window.AOS && AOS.refreshHard) {
      AOS.refreshHard();
    }
  }, 400);
});

// ================= AOS INIT =================
if (window.AOS) {
  AOS.init({
    duration: 900,
    once: true,
    offset: window.innerWidth < 768 ? 60 : 120,
    easing: "ease-in-out"
  });

  // Refresh AOS on scroll (mobile only)
  if (window.innerWidth < 768) {
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }
}

// ================= VANILLA TILT =================
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 8,
    speed: 400
  });
}

// ================= TYPED JS =================
const typingEl = document.querySelector("#typing");

if (typingEl && window.Typed) {
  if (window.typedInstance) {
    window.typedInstance.destroy();
  }

  window.typedInstance = new Typed("#typing", {
    strings: [
      "Informatics Engineering Student",
      "IT Network Enthusiast"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

// ================= PROGRESS BAR =================
window.addEventListener("scroll", function () {
  document.querySelectorAll(".progress-bar-fill").forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    const position = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 50) {
      bar.style.width = percent + "%";
    }
  });
});

// ================= NAVBAR TOGGLE =================
(function () {
  try {
    const header = document.getElementById("safe-navbar");
    const toggle = document.getElementById("safeToggle");
    const menu = document.getElementById("safeMenu");

    if (!header || !toggle || !menu) return;

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const open = header.getAttribute("data-open") === "1";
      header.setAttribute("data-open", open ? "0" : "1");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        header.setAttribute("data-open", "0");
      });
    });
  } catch (err) {
    console.warn("Navbar error:", err);
  }
})();

function initAOS() {
    if (window.innerWidth >= 992) {
      AOS.init({
        duration: 800,
        once: true,
      });
    } else {
      // Matikan AOS di mobile & inspect mobile
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos');
      });
    }
  }

  initAOS();
/**
 * Template Name: BizLand - v3.7.0
 * Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
// (function () {
//   "use strict";

//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim();
//     if (all) {
//       return [...document.querySelectorAll(el)];
//     } else {
//       return document.querySelector(el);
//     }
//   };

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all);
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach((e) => e.addEventListener(type, listener));
//       } else {
//         selectEl.addEventListener(type, listener);
//       }
//     }
//   };

//   /**
//    * Easy on scroll event listener
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener("scroll", listener);
//   };

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select("#navbar .scrollto", true);
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200;
//     navbarlinks.forEach((navbarlink) => {
//       if (!navbarlink.hash) return;
//       let section = select(navbarlink.hash);
//       if (!section) return;
//       if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
//         navbarlink.classList.add("active");
//       } else {
//         navbarlink.classList.remove("active");
//       }
//     });
//   };
//   window.addEventListener("load", navbarlinksActive);
//   onscroll(document, navbarlinksActive);

//   /**
//    * Scrolls to an element with header offset
//    */
//   const scrollto = (el) => {
//     let header = select("#header");
//     let offset = header.offsetHeight;

//     if (!header.classList.contains("header-scrolled")) {
//       offset -= 16;
//     }

//     let elementPos = select(el).offsetTop;
//     window.scrollTo({
//       top: elementPos - offset,
//       behavior: "smooth",
//     });
//   };

//   /**
//    * Header fixed top on scroll
//    */
//   let selectHeader = select("#header");
//   if (selectHeader) {
//     let headerOffset = selectHeader.offsetTop;
//     let nextElement = selectHeader.nextElementSibling;
//     const headerFixed = () => {
//       if (headerOffset - window.scrollY <= 0) {
//         selectHeader.classList.add("fixed-top");
//         nextElement.classList.add("scrolled-offset");
//       } else {
//         selectHeader.classList.remove("fixed-top");
//         nextElement.classList.remove("scrolled-offset");
//       }
//     };
//     window.addEventListener("load", headerFixed);
//     onscroll(document, headerFixed);
//   }

//   /**
//    * Back to top button
//    */
//   let backtotop = select(".back-top");
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add("active");
//       } else {
//         backtotop.classList.remove("active");
//       }
//     };
//     window.addEventListener("load", toggleBacktotop);
//     onscroll(document, toggleBacktotop);
//   }

//   /**
//    * Mobile nav toggle
//    */
//   on("click", ".mobile-nav-toggle", function (e) {
//     select("#navbar").classList.toggle("navbar-mobile");
//     this.classList.toggle("bi-list");
//     this.classList.toggle("bi-x");
//   });

//   /**
//    * Mobile nav dropdowns activate
//    */
//   on(
//     "click",
//     ".navbar .dropdown > a",
//     function (e) {
//       if (select("#navbar").classList.contains("navbar-mobile")) {
//         e.preventDefault();
//         this.nextElementSibling.classList.toggle("dropdown-active");
//       }
//     },
//     true,
//   );

//   /**
//    * Scrool with offset on links with a class name .scrollto
//    */
//   on(
//     "click",
//     ".scrollto",
//     function (e) {
//       if (select(this.hash)) {
//         e.preventDefault();

//         let navbar = select("#navbar");
//         if (navbar.classList.contains("navbar-mobile")) {
//           navbar.classList.remove("navbar-mobile");
//           let navbarToggle = select(".mobile-nav-toggle");
//           navbarToggle.classList.toggle("bi-list");
//           navbarToggle.classList.toggle("bi-x");
//         }
//         scrollto(this.hash);
//       }
//     },
//     true,
//   );

//   on(
//     "click",
//     ".foreword",
//     function (e) {
//       const target = select(this.hash);
//       if (!target) return;

//       e.preventDefault();

//       const preface = select("#preface");

//       const isInViewport = (el) => {
//         const rect = el.getBoundingClientRect();
//         return (
//           rect.top >= 0 &&
//           rect.left >= 0 &&
//           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//       };

//       if (preface.classList.contains("active")) {
//         if (!isInViewport(preface)) {
//           scrollto("#preface");
//         } else {
//           preface.classList.remove("active");
//         }
//       } else {
//         preface.classList.add("active");
//         scrollto("#preface");
//       }
//     },
//     false,
//   );

//   /* *
//   disabled an element with class .updating
// */
//   on("click", ".updating", (e) => e.preventDefault(), true);

//   /**
//    * activate unit title
//    */
//   on(
//     "click",
//     ".unit-title",
//     function (e) {
//       if (!e.target.classList.contains("active")) {
//         e.preventDefault();
//         select(".unit-title.active")?.classList.remove("active");
//       }
//       this.classList.toggle("active");
//     },
//     true,
//   );

//   /**
//    * lesson-link add active class
//    */
//   on(
//     "click",
//     ".lesson-link",
//     function (e) {
//       if (!e.target.classList.contains("active")) {
//         select(".lesson-link.active")?.classList.remove("active");
//         this.classList.add("active");
//       }
//     },
//     true,
//   );

//   /**
//    * Scroll with ofset on page load with hash links in the url
//    */
//   window.addEventListener("load", () => {
//     if (window.location.hash) {
//       if (select(window.location.hash)) {
//         scrollto(window.location.hash);
//       }
//     }
//   });

//   /**
//    * Preloader
//    */
//   let preloader = select("#preloader");
//   if (preloader) {
//     window.addEventListener("load", () => {
//       preloader.remove();
//     });
//   }

//   /**
//    * Initiate glightbox
//    */
//   const glightbox = GLightbox({
//     selector: ".glightbox",
//   });

//   /**
//    * Skills animation
//    */
//   let skillsContent = select(".skills-content");
//   if (skillsContent) {
//     new Waypoint({
//       element: skillsContent,
//       offset: "80%",
//       handler: function (direction) {
//         let progress = select(".progress .progress-bar", true);
//         progress.forEach((el) => {
//           el.style.width = el.getAttribute("aria-valuenow") + "%";
//         });
//       },
//     });
//   }

//   /**
//    * Testimonials slider
//    */
//   new Swiper(".testimonials-slider", {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//   });

//   /**
//    * Porfolio isotope and filter
//    */
//   window.addEventListener("load", () => {
//     let portfolioContainer = select(".portfolio-container");
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: ".portfolio-item",
//       });

//       let portfolioFilters = select("#portfolio-flters li", true);

//       on(
//         "click",
//         "#portfolio-flters li",
//         function (e) {
//           e.preventDefault();
//           portfolioFilters.forEach(function (el) {
//             el.classList.remove("filter-active");
//           });
//           this.classList.add("filter-active");

//           portfolioIsotope.arrange({
//             filter: this.getAttribute("data-filter"),
//           });
//           portfolioIsotope.on("arrangeComplete", function () {
//             AOS.refresh();
//           });
//         },
//         true,
//       );
//     }
//   });

//   /**
//    * Initiate portfolio lightbox
//    */
//   const portfolioLightbox = GLightbox({
//     selector: ".portfolio-lightbox",
//   });

//   /**
//    * Portfolio details slider
//    */
//   new Swiper(".portfolio-details-slider", {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//   });

//   /**
//    * Animation on scroll
//    */
//   window.addEventListener("load", () => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//       mirror: false,
//     });
//   });
// })();

//# sourceMappingURL=main.js.map

(function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const select = (el, all = false) => (all ? [...$$(el.trim())] : $(el.trim()));

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      all ? selectEl.forEach((e) => e.addEventListener(type, listener)) : selectEl.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => el.addEventListener("scroll", listener);

  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      navbarlink.classList.toggle(
        "active",
        position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight,
      );
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  const scrollto = (el) => {
    const header = select("#header");
    let offset = header.offsetHeight - (header.classList.contains("header-scrolled") ? 0 : 16);
    const elementPos = select(el).offsetTop;
    window.scrollTo({ top: elementPos - offset, behavior: "smooth" });
  };

  const selectHeader = select("#header");
  if (selectHeader) {
    const headerOffset = selectHeader.offsetTop;
    const nextElement = selectHeader.nextElementSibling;
    const headerFixed = () => {
      const fixed = headerOffset - window.scrollY <= 0;
      selectHeader.classList.toggle("fixed-top", fixed);
      nextElement.classList.toggle("scrolled-offset", fixed);
    };
    window.addEventListener("load", headerFixed);
    onscroll(document, headerFixed);
  }

  const backtotop = select(".back-top");
  if (backtotop) {
    const toggleBacktotop = () => backtotop.classList.toggle("active", window.scrollY > 100);
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on("click", ".mobile-nav-toggle", function () {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true,
  );

  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        const navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          const navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true,
  );

  on("click", ".foreword", function (e) {
    const target = select(this.hash);
    if (!target) return;
    e.preventDefault();
    const preface = select("#preface");
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    if (preface.classList.contains("active")) {
      !isInViewport(preface) ? scrollto("#preface") : preface.classList.remove("active");
    } else {
      preface.classList.add("active");
      scrollto("#preface");
    }
  });

  on("click", ".updating", (e) => e.preventDefault(), true);

  on(
    "click",
    ".unit-title",
    function (e) {
      if (!e.target.classList.contains("active")) {
        e.preventDefault();
        select(".unit-title.active")?.classList.remove("active");
      }
      this.classList.toggle("active");
    },
    true,
  );

  on(
    "click",
    ".lesson-link",
    function () {
      if (!this.classList.contains("active")) {
        select(".lesson-link.active")?.classList.remove("active");
        this.classList.add("active");
      }
    },
    true,
  );

  GLightbox({ selector: ".glightbox" });

  const skillsContent = select(".skills-content");
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: "80%",
      handler: () => {
        select(".progress .progress-bar", true).forEach((el) => {
          el.style.width = `${el.getAttribute("aria-valuenow")}%`;
        });
      },
    });
  }

  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: "auto",
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
  });

  window.addEventListener("load", () => {
    // 2️⃣ Scroll to hash on load
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
    select("#preloader")?.remove();
    // 4️⃣ Init AOS
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });

    // 5️⃣ Portfolio isotope setup and filter
    const portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, { itemSelector: ".portfolio-item" });
      const portfolioFilters = select("#portfolio-flters li", true);
      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");
          portfolioIsotope.arrange({ filter: this.getAttribute("data-filter") });
          portfolioIsotope.on("arrangeComplete", () => AOS.refresh());
        },
        true,
      );
    }
  });

  GLightbox({ selector: ".portfolio-lightbox" });

  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
  });
})();

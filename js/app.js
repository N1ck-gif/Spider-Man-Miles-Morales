// DOMContentLoaded - dispara o evento depois que o conteúdo está todo carregado na página
document.addEventListener("DOMContentLoaded", () => {
  scrollElements();

  // Animação da imagem
  $(".js-tilt").tilt({
    perspective: 2000,
    scale: 1.01,
  });

  // Configurações do carousel
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // Animações quando a tela é carregada
  let tl = new TimelineMax();
  tl.fromTo(
    ".bg-loader",
    1,
    { width: "100%" },
    { width: "0%", delay: 5, ease: Expo.easeinOut }
  )

    .fromTo(
      ".bg-video",
      1.5,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeinOut },
      "-=1"
    )

    .fromTo(
      "#logo",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".nav-list",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".nav-social",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".bx",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".item-1",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".item-2",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".item-3",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".item-4",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    )

    .fromTo(
      ".item-5",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeinOut },
      "-=0.5"
    );

    setTimeout(() => {
      document.getElementById("body").style.overflowY = "scroll"
    }, 8000);
});

function scrollElements() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#titulo-sombra-story", {
    scrollTrigger: {
      trigger: "#titulo-sombra-story",
      start: "top 80%",
      end: "bottom 5%",
      scrub: true,
    },
    x: -6,
    opacity: 1,
    duration: 1,
  });

  gsap.to("#titulo-sombra-wallpapers", {
    scrollTrigger: {
      trigger: "#titulo-sombra-wallpapers",
      start: "top 80%",
      end: "bottom 5%",
      scrub: true,
    },
    x: -10.8,
    opacity: 1,
    duration: 1,
  });

  gsap.to(".story", {
    scrollTrigger: {
      trigger: ".story",
      start: "top bottom",
      end: "top 10%",
      scrub: true,
      // markers: true,
    },
    boxShadow: "12px -12px 12px #B31317",
    duration: 1
  });

}

function onClickMenu() {
  document.getElementById("menu-mobile").classList.toggle("change");
  document.getElementById("nav-list-mobile").classList.toggle("change");
  document.getElementById("nav-header").classList.toggle("change");

}

function scrollNav() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    if (document.getElementById("nav-header").classList.contains("change")) {
      console.log('entrou');
      document.getElementById("menu-mobile").classList.remove("change");
      document.getElementById("nav-list-mobile").classList.remove("change");
      document.getElementById("nav-header").classList.remove("change");
    }


    var nav = document.querySelector("#nav-header");

    if (window.scrollY == 0 && document.querySelector("#nav-header.sticky")) {
      nav.classList.toggle("sticky");
      return;
    }

    var nav = document.querySelector("#nav-header");
    if (nav != null) {
      nav.classList.toggle("sticky", window.scrollY < lastScrollTop);
    }

    lastScrollTop = window.scrollY;
  });
}

function go(elem) {
  window.scroll({
    top: document.querySelector(elem).offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

function animateLogo() {
  let elemento = document.getElementById("logo-menu").children[0].children[0];
  elemento.classList.add("logo-spiderman-menu");

  setTimeout(() => {
    elemento.classList.remove("logo-spiderman-menu");
  }, 4000)

}

scrollNav();
// DOMContentLoaded - dispara o evento depois que o conteúdo está todo carregado na página
document.addEventListener("DOMContentLoaded", () => {
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
      ".logo",
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
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: size,
  slidesToScroll: size,
};

function go(elem) {
  window.scroll({
    top: document.querySelector(elem).offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

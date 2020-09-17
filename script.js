let container = document.querySelector(".container"),
  round = document.querySelector(".round"),
  roundSmall = document.querySelector(".roundSmall"),
  figure = document.querySelector(".benjaminCode");

container.addEventListener("mousemove", (e) => {
  let _w = window.innerWidth / 2;
  let _mouseX = e.clientX;

  round.style.transform = `translate(${50 - (_mouseX - _w) * 0.03 - 70}%, -10vh)`;
  figure.style.transform = `translate(-${50 - (_mouseX - _w) * 0.008 - 20}%, 0)`;
  roundSmall.style.transform = `translate(-${60 - (_mouseX - _w) * 0.16}%, 5vh)`;
});

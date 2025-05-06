// https://www.youtube.com/watch?v=DqkH_PV5cto

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnGroup = $("#choice .btn-group");

if (btnGroup) {
  btnGroup.onclick = (event) => {
    const btn = btnGroup.querySelectorAll(".btn");

    btn.forEach((item) => {
      const currentBtn = event.target.closest(".btn");
      if (currentBtn) {
        item.classList.remove("active");
        currentBtn.classList.add("active");
        btnGroup.title = currentBtn.innerText;
      }
    });
  };
}

AOS.init();

const handleFullscreen = (selector) => {
  const node = document.getElementById(selector);
  if (node.requestFullscreen) {
    node.requestFullscreen();
  } else if (node.mozRequestFullScreen) {
    node.mozRequestFullScreen();
  } else if (node.webkitRequestFullscreen) {
    node.webkitRequestFullscreen();
  } else if (node.msRequestFullscreen) {
    node.msRequestFullscreen();
  }
};
// const fullscreen = document.querySelector(".fullscreen");
// fullscreen.onclick = () => handleFullscreen("fullscreen-container");

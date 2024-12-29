const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".btn-close");
const open = document.querySelector(".btn-open");

function show() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hide() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

open.addEventListener("click", show);
overlay.addEventListener("click", hide);
close.addEventListener("click", hide);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hide();
  }
});

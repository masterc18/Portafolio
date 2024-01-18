document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#menu");
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");
  const me = document.querySelector("#me");
  open.addEventListener("click", () => {
    nav.classList.add("show");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

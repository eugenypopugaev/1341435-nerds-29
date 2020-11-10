var popup = document.querySelector(".modal");

var button = document.querySelector(".contacts__link");


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--open");
  popup.classList.remove("modal--error");
});

var close = popup.querySelector(".modal__close");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--error");
  popup.classList.remove("modal--open");
  setTimeout(function () {
    popup.classList.remove("modal--open");

  }, 600);
});

var form = popup.querySelector(".modal__form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal--error");
    form.offsetWidth = form.offsetWidth;
    popup.classList.add("modal--error")
  }
});
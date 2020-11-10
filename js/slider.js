var slide = document.querySelector(".slider__container");

var slidebuttonone = slide.querySelector(".slider-buttons__button--one");
var slidebuttontwo = slide.querySelector(".slider-buttons__button--two");
var slidebuttonthree = slide.querySelector(".slider-buttons__button--three");

var slideone = slide.querySelector(".slider__item--one");
var slidetwo = slide.querySelector(".slider__item--two");
var slidethree = slide.querySelector(".slider__item--three");

slidebuttonone.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideone.classList.add("slider__item--active");
    slidebuttonone.classList.add("slider-buttons__button--active");
    slidetwo.classList.remove("slider__item--active");
    slidebuttontwo.classList.remove("slider-buttons__button--active");
    slidethree.classList.remove("slider__item--active");
    slidebuttonthree.classList.remove("slider-buttons__button--active");
});

slidebuttontwo.addEventListener("click", function (evt) {

    evt.preventDefault();
    slideone.classList.remove("slider__item--active");
    slidebuttonone.classList.remove("slider-buttons__button--active");
    slidetwo.classList.add("slider__item--active");
    slidebuttontwo.classList.add("slider-buttons__button--active");
    slidethree.classList.remove("slider__item--active");
    slidebuttonthree.classList.remove("slider-buttons__button--active");
});

slidebuttonthree.addEventListener("click", function (evt) {

    evt.preventDefault();
    slideone.classList.remove("slider__item--active");
    slidebuttonone.classList.remove("slider-buttons__button--active");
    slidetwo.classList.remove("slider__item--active");
    slidebuttontwo.classList.remove("slider-buttons__button--active");
    slidethree.classList.add("slider__item--active");
    slidebuttonthree.classList.add("slider-buttons__button--active");
});
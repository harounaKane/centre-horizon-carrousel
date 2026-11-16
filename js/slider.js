"use strict"; // Mode strict du JavaScript

const $ = (elem) => document.querySelector(elem);

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const toolbarToggle = $("#toolbar-toggle");
const toolbar = $(".toolbar");
const next = $("#slider-next");
const previous = $("#slider-previous");
const toggle = $("#slider-toggle");
const random = $("#slider-random");

const images = [
  { path: "images/1.jpg", title: "1 - Rue de l'art", alt: "rue art" },
  { path: "images/2.jpg", title: "2 - Sur le pont", alt: "le pont" },
  {
    path: "images/3.jpg",
    title: "3 - Université simplon",
    alt: "Une université",
  },
  // {path: "images/1.jpg", title: "1 - Rue de l'art", alt: "rue art"},
  // {path: "images/1.jpg", title: "1 - Rue de l'art", alt: "rue art"},
  // {path: "images/1.jpg", title: "1 - Rue de l'art", alt: "rue art"},
];

let index = 0;
let idInterval = null;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function avancer() {
  index++;
  if (index == images.length) index = 0;
  refresh();
}

function reculer() {
  index--;
  if (index < 0) index = images.length - 1;
  refresh();
}

function play() {
  $("#slider-toggle i").classList.toggle("fa-play");
  $("#slider-toggle i").classList.toggle("fa-pause");

  if (idInterval !== null) {
    clearInterval(idInterval);
    idInterval = null;
    return;
  }

  idInterval = setInterval(avancer, 1000);
}

function refresh() {
  $("#slider img").src = images[index].path;
  $("#slider img").alt = images[index].alt;

  $("#slider figcaption").textContent = images[index].title;
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

toolbarToggle.addEventListener("click", () => {
  toolbar.classList.toggle("d-none");
  console.log(toolbar);
});

next.addEventListener("click", avancer);

previous.addEventListener("click", reculer);

toggle.addEventListener("click", play);

random.addEventListener("click", () => {
  console.log("random");
});

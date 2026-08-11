/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

  });


  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("open");

    });

  });

}



/* =========================
   GENRE VOTING
========================= */

const genreItems = document.querySelectorAll(".genre-item");
const genreSubmit = document.getElementById("genreSubmit");
const genreMessage = document.getElementById("genreMessage");

let selectedGenre = null;


genreItems.forEach(function (item) {

  item.addEventListener("click", function () {

    genreItems.forEach(function (genre) {

      genre.classList.remove("selected");

    });


    item.classList.add("selected");

    selectedGenre = item.dataset.genre;

  });

});



if (genreSubmit) {

  genreSubmit.addEventListener("click", function () {

    if (!selectedGenre) {

      genreMessage.textContent =
        "Choose a genre first.";

      return;

    }


    genreMessage.textContent =
      "Your vote for " +
      selectedGenre +
      " has been saved.";

  });

}
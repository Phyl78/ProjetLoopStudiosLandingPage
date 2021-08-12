/**
 * navbar
 * crée une programe qui permetre de cacher le borger nav
 * si je click sur icon1:
 * affiche le deuxièmes type d'affichement de nav berger
 * si je click sur icon2:
 * affiche la première type de nav berger
 */
// événement pour icon1
navbarTogglerIcon.addEventListener("click", function (e) {
  if (this) {
    navbarTogglerIcon.classList.add("none");
    navbarIconX.classList.remove("none");
  }
});
// événement pour icon2
navbarIconX.addEventListener("click", function (e) {
  if (this) {
    navbarTogglerIcon.classList.remove("none");
    navbarIconX.classList.add("none");
  }
});

//Get ref to the hamburger and nav list
const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list")

hamburgerBtn.addEventListener("click", function() {
  navList.classList.toggle("show");
})
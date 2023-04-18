const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const actionBtn = document.querySelector(".action");

actionBtn.addEventListener("click", () => {
overlay.style.display = "block";
});

yesBtn.addEventListener("click", () => {
// Action you want to do when "Yes" is clicked
overlay.style.display = "none";
});

noBtn.addEventListener("click", () => {
overlay.style.display = "none";
});


//1. Grap the share button
const shareButton = document.querySelector(".share-button");
const circle = document.querySelector("circle");
const arrow = document.querySelector("path");
const socialButtons = document.querySelector(".social-buttons");

function toggleShareButton(e) {
    e.preventDefault();
    circle.classList.toggle("dark-fill");
    arrow.classList.toggle("light-fill");
    socialButtons.classList.toggle("hidden");
}

//2. Add event listner to the shareButton;
shareButton.addEventListener("click", toggleShareButton);

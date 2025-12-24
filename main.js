

//1. Grap the share button
const shareButton = document.querySelector(".share-button");
const circle = document.querySelector("circle");
const arrow = document.querySelector("path");

function toggleShareButton(e) {
    e.preventDefault();
    circle.classList.toggle("dark-background");
    arrow.classList.toggle("light-background");
}

//2. Add event listner to the shareButton;
shareButton.addEventListener("click", toggleShareButton);

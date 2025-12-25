//1. Grap the elements:
const shareButton = document.querySelector(".share-button");
const circle = document.querySelector("circle");
const arrow = document.querySelector("path");
const socialButtons = document.querySelector(".social-buttons");
const messageLikeShape = document.querySelector(".message-like-shape");



function toggleShareButton(e) {
    e.preventDefault();
    circle.classList.toggle("dark-fill");
    arrow.classList.toggle("light-fill");
    socialButtons.classList.toggle("hidden");

    if (window.innerWidth > 704) {
        messageLikeShape.classList.toggle("block-display");
    }
}

//2. Add event listner to the shareButton;
shareButton.addEventListener("click", toggleShareButton);

# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./assets/screenshots/Frame%201.svg)


### Links

- Solution URL: [Solution URL](https://github.com/hussaindev94/frontend-mentor-challenges-article-preview-component)
- Live Site URL: [Live site URL](https://hussaindev94.github.io/frontend-mentor-challenges-article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
In this project I have learned the following:
1. Adding parts to HTML file and control their appearance using JS.

    ```html
      <div class="message-like-shape">
        <svg xmlns="http://www.w3.org/2000/svg" width="268" height="87" viewBox="0 0 268 87" fill="none">
          <g filter="url(#filter0_d_49_31)">

            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 0C14.4772 0 10 4.47715 10 10V45C10 50.5228 14.4772 55 20 55H122L134 67L146 55H248C253.523 55 258 50.5228 258 45V10C258 4.47715 253.523 0 248 0H20Z"
              fill="#48556A" />
          </g>
          <defs>

            <filter id="filter0_d_49_31" x="0" y="0" width="268" height="87" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.835294 0 0 0 0 0.882353 0 0 0 0.503415 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_31" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_31" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
    ```
    ```js
      if (window.innerWidth > 704) {
        messageLikeShape.classList.toggle("block-display");
      }
    ```


### Useful resources
- [Resource 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) - This is a searfice scraching on how to setup your project to use JS.
- [Resource 2](https://www.freecodecamp.org/news/dom-events-and-javascript-event-listeners/) - This freecodecamp plog post helped my alot on how to add event listeners on html elements.
- [Resource 3](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet) - This link is for codecademy which is another platform that dilever high quailty video courses.

## Author

- Website - [My Portfolio](https://hussaindev94.github.io/Portfolio/)
- Frontend Mentor - [@hussaindev94](https://www.frontendmentor.io/profile/hussaindev94)
- Twitter - [@hussaindev94](https://www.twitter.com/hussaindev94)

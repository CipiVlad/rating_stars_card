# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Tags](#tags)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- vite bundler vanilla js

### What I learned

```html
  <div class="rating_container" id="rating_star_container">
            <div class="rating_stars" value="1">1</div>
            <div class="rating_stars" value="2">2</div>
            <div class="rating_stars" value="3">3</div>
            <div class="rating_stars" value="4">4</div>
            <div class="rating_stars" value="5">5</div>
          </div>
```
```css

.grid_wrapper_center {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.grid_container_content {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}

.card {
  width: 400px;
  height: 450px;
  background-color: var(--dark-blue);
  border-radius: 40px;
  background: var(--dark-blue);
  background: radial-gradient(circle, var(--very-dark-blue)0%, var(--dark-blue) 86%);

}

```
```js
const ratingStars = [...document.getElementsByClassName('rating_stars')]

//[filter the clicked value]
//[make rest of arrays uncklickable]
/**
 * This code will remove the 'active' class from all stars, add it to the clicked star, 
 * disable pointer events for all stars, enable pointer events for the clicked star, 
 * and then call the handleSubmit function with the selected value.
 */
ratingStars.forEach((star) => {
  star.addEventListener('click', () => {
    console.log(star.getAttribute('value'));
    ratingStars.forEach((s) => s.classList.remove('active'));
    star.classList.toggle('active');
    ratingStars.forEach((s) => s.style.pointerEvents = 'none');
    star.style.pointerEvents = 'auto';
    handleSubmit(star.getAttribute('value'));
  });
});

if (localStorage.getItem('rating') && ratingMessageNumber) {
  ratingMessageNumber.innerText = localStorage.getItem('rating')
} else {
  console.error('something went wrong')
}


```

### Useful resources

- [how to make a rating star](https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3)

## Author

- [My Portfolio](https://cipivlad.github.io/myportfoliosite/)
- [Frontend Mentor - @CipiVlad](https://www.frontendmentor.io/profile/CipiVlad)
- [dev.to](https://dev.to/cipivlad)

## Tags
#css, #grid, #flexbox, #github-pages, #vite

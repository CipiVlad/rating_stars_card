// https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3
const form = document.getElementById('grid_container_content')
const ratingStars = [...document.getElementsByClassName('rating_stars')]
const ratingMessageNumber = document.getElementById('rating_message_number')

const handleSubmit = (number) => {
  console.log(`You've selected ${number} of 5`)
  localStorage.setItem("rating", number)

}

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
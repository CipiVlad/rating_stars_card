const form = document.getElementById('grid_container_content');
const ratingStars = [...document.getElementsByClassName('rating_stars')];
const ratingMessageNumber = document.getElementById('rating_message_number');
const errorMsg = document.getElementById('message_for_user');
const handleSubmit = (number) => {
  localStorage.setItem("rating", number)
  console.log(localStorage.length);
}

//[filter the clicked value]
//[make rest of arrays uncklickable]
/**
 * This code will remove the 'active' class from all stars, add it to the clicked star, 
 * disable pointer events for all stars, enable pointer events for the clicked star, 
 * and then call the handleSubmit function with the selected value.
 */

const getYourRatingStar = ratingStars.forEach((star) => {
  star.addEventListener('click', () => {
    ratingStars.forEach((s) => s.classList.remove('active'));
    star.classList.toggle('active');
    ratingStars.forEach((s) => s.style.pointerEvents = 'none');
    star.style.pointerEvents = 'auto';
    handleSubmit(star.getAttribute('value'));
  });
});

if (localStorage.length < 1) {
  errorMsg.innerHTML = 'please go back and rate'
} else {
  ratingMessageNumber.innerText = localStorage.getItem('rating')
  localStorage.removeItem("rating")
}

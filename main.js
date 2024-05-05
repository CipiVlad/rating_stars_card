// https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3
const form = document.getElementById('grid_container_content')
const ratingStars = [...document.getElementsByClassName('rating_stars')]
const ratingMessage = document.getElementById('rating_message')

const filtered = ratingStars.filter((e) => {
  return (
    e.addEventListener('click', () => {
      e.classList.toggle('active')
      handleSubmit(e.getAttribute('value'))
    })
  )
});
console.log(filtered);

const handleSubmit = (number) => {
  console.log(`You've selected ${number} of 5`)
}


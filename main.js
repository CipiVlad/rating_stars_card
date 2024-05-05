// https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3
const form = document.getElementById('grid_container_content')
const ratingStars = [...document.getElementsByClassName('rating_stars')]


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
  return `You've selected ${number} of 5`
}


/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
  e.preventDefault()
  const userName = form.username.value
  const codinglevel = form.codingLevel.value
  const Location = form.location.value
  const didEnjoy = form.didLikeAssignment.checked

const newName = document.getElementById('results-username')
newName.textContent = userName
const levelres = document.getElementById('results-coding-level')
levelres.textContent = codinglevel
const urLocation = document.getElementById('results-location')
urLocation.textContent = Location
const enjoyment = document.getElementById('results-did-like-assignment')
if (didEnjoy === true ){
  enjoyment.textContent = "Yes"
} else {
  enjoyment.textContent ="No"
}
document.getElementById('new-user-form').reset()
};

const form = document.querySelector('#new-user-form')
form.addEventListener('submit' , handleSubmit)





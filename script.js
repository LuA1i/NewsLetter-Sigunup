const form = document.querySelector('form')
const card_1 = document.querySelector('.card')
const card_2 = document.querySelector('.success_info')

const btnSuccess = document.querySelector('btn_dissmiss')
const cardSuccess = document.querySelector('.card_success')
form.addEventListener('submit', function (e) {
  e.preventDefault()

  card_1.classList.add('hidden')
  card_2.classList.remove('hidden')
})

btnSuccess.addEventListener('click', function () {
  console.log('I got clicked')
})

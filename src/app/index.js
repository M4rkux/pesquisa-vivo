import '../style/main.scss'
import { SurveyService } from './survey.service'

const allInputs = Array.from(document.querySelectorAll('input'))
const btnSubmit = document.querySelector('.btn-submit')

const form = document.querySelector('form')

const confirmation = `
    <img class="checked" src="/imgs/checked.svg" />
    <h4 class="subtitle">Tudo certo</h4>
    <span>A VIVO agradece a sua participação.</span>
`
btnSubmit.disabled = !form.checkValidity()

allInputs.forEach(elem => {
  elem.addEventListener('change', function () {
    checkInput(this, true)
    btnSubmit.disabled = !allInputs.every(input => checkInput(input))
  })
})

form.addEventListener('submit', function (e) {
  e.preventDefault()
  btnSubmit.disabled = true
  btnSubmit.classList.add('loading')

  let survey = {}
  allInputs.forEach(elem => {
    elem.disabled = true
    survey[elem.name] = elem.value
  })

  SurveyService.create(survey).then(result => {
    if (result.ok) {
      const div = document.createElement('div')
      div.classList.add('confirmation')
      div.innerHTML = confirmation
      form.parentNode.appendChild(div)
      form.parentNode.removeChild(form)
    } else {
      btnSubmit.disabled = false
      btnSubmit.classList.remove('loading')
      allInputs.map(elem => { elem.disabled = false })
    }
  })
})

function checkInput (elem, changeClass = false) {
  let valid = elem.checkValidity()

  if (changeClass) {
    toggleSuccessError(elem, valid)
  }
  return valid
}

function toggleSuccessError (elem, isSuccess) {
  elem.classList.toggle('success', isSuccess)
  elem.classList.toggle('error', !isSuccess)
}

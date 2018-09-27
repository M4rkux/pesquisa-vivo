import '../style/main.scss'
import { SurveyService } from './survey.service'

const allInputs = Array.from(document.querySelectorAll('input'))
const btnSubmit = document.querySelector('.btn-submit')

const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const cpf = document.querySelector('#cpf')

const form = document.querySelector('form')

const contactsType = Array.from(document.querySelectorAll('[name=canal]'))

const confirmation = `
    <img class="checked" src="/imgs/checked.svg" />
    <h4 class="subtitle">Tudo certo</h4>
    <span>A VIVO agradece a sua participação.</span>
`
btnSubmit.disabled = !form.checkValidity()

allInputs.forEach(elem => {
  elem.addEventListener('change', function () {
    checkInput(this, true)
    btnSubmit.disabled = !canSubmit()
  })
  elem.addEventListener('keyup', function () {
    if (this.getAttribute('mask')) {
      this.value = createMask(this.value, this.getAttribute('mask'))
    }
    checkInput(this, true)
    btnSubmit.disabled = !canSubmit()
  })
})

contactsType.forEach((input) => {
  input.addEventListener('change', function () {
    if (this.checked) {
      email.disabled = this.value !== 'email';
      telefone.disabled = this.value !== 'sms';
    }
  })
})

function canSubmit() {
  let valid = allInputs.every(input => checkInput(input))
  if (valid) {
    valid = valid && 
    (email.value && checkInput(email) || 
    (telefone.value && checkInput(telefone) && cpf.value && checkInput(cpf)))
  }
  if (valid) {
    btnSubmit.removeAttribute('title')
  } else {
    btnSubmit.setAttribute('title', 'Preencha os campos obrigatórios')
  }
  return valid;
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  btnSubmit.disabled = true
  btnSubmit.classList.add('loading')

  let survey = {}
  allInputs.forEach(elem => {
    elem.disabled = true
    if (elem.getAttribute('type') !== 'radio' || 
      elem.getAttribute('type') === 'radio' && 
      elem.checked) {
        survey[elem.name] = elem.value
    }
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

function createMask(string, type){
  const number = string.replace(/\D/g,'')
  switch (type) {
    case 'cpf':
      const numberCpf = number.substring(0,11)
      if (numberCpf.length <= 6) {
        return numberCpf.replace(/(\d{3})(\d{1,3})/,"$1.$2");
      } else if (numberCpf.length <= 9) {
        return numberCpf.replace(/(\d{3})(\d{3})(\d{1,3})/,"$1.$2.$3");
      }
      return numberCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,"$1.$2.$3-$4");
      break;

    case 'telefone':
      const numberPhone = number.substring(0,11)
      if (numberPhone.length <= 2) {
        return numberPhone.replace(/(\d{1,2})/,"($1");
      } 
      else if (numberPhone.length <= 7) {
        return numberPhone.replace(/(\d{2})(\d{1,5})/,"($1)$2");
      } 
      else if (numberPhone.length <= 10) {
        return numberPhone.replace(/(\d{2})(\d{4})(\d{1,4})/,"($1)$2-$3");
      } 
      return numberPhone.replace(/(\d{2})(\d{5})(\d{4})/,"($1)$2-$3");
      break;
  }
  
}
const inputEmail = document.querySelector('#email');
const buttonValidation = document.querySelector('#buttonValidation');
const errorWarning = document.querySelector('#error');
const textWarning = document.querySelector('#warning');

buttonValidation.addEventListener('click', () => {
  const email = inputEmail.value.toLowerCase();
  
  if (email.includes('@gmail.com') || email.includes('@email.com') || email.includes('@outlook.com')) {
    console.log('Sucess!');
    errorWarning.style.visibility = 'hidden';
    textWarning.style.visibility = 'hidden';
    inputEmail.style.borderColor = 'hsl(0, 80%, 86%)';
  } else {
    errorWarning.style.visibility = 'visible';
    inputEmail.style.borderColor = 'hsl(0, 93%, 68%)';
    textWarning.style.visibility = 'visible';
  }
})

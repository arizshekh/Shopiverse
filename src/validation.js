const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  // Always prevent the default form submission initially
  e.preventDefault(); 
  
  // Clear previous errors
  error_message.innerText = ''
  const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)
  allInputs.forEach(input => input.parentElement.classList.remove('incorrect'))
  
  let errors = []

  if(firstname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    
    if(errors.length === 0){
      // SUCCESSFUL SIGNUP: Redirect to login page with success flag
      window.location.href = '/login.html?status=registered'; 
      return; 
    }
  }
  else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)

    if(errors.length === 0){
      // === CRITICAL FIX: SUCCESSFUL LOGIN LOGIC ===
      const username = email_input.value.split('@')[0]; // Using email prefix as name for demo
      localStorage.setItem('loggedInUser', username);
      
      // Redirect to the intermediate page (index.html) with the status parameter
      // Assuming login.html is in 'sign_in_&_sign_up/' and index.html is one level up
      window.location.href = '/welcome.html?status=logged_in'; 
      return; 
    }
  }

  if(errors.length > 0){
    // If there are any errors
    error_message.innerText  = errors.join(". ")
  }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }


  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})
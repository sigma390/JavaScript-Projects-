import './style.css';

// Select form and input elements
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpass');
const successMessage = document.getElementById('successMessage');

// Validation logic
const checkInputs = () => {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();
  let isValid = true;

  // Validate name
  if (nameVal.length < 3 || nameVal.length > 20) {
    setError(name, 'Name must be between 3 and 20 characters');
    isValid = false;
  } else {
    setSuccess(name);
  }

  // Validate email
  if (!isValidEmail(emailVal)) {
    setError(email, 'Please enter a valid email address');
    isValid = false;
  } else {
    setSuccess(email);
  }

  // Validate password
  if (passwordVal.length < 6) {
    setError(password, 'Password must be at least 6 characters long');
    isValid = false;
  } else {
    setSuccess(password);
  }

  // Validate confirm password
  if (confirmPasswordVal !== passwordVal) {
    setError(confirmPassword, 'Passwords do not match');
    isValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  return isValid;
};

// Helper function to check email validity
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Set error message
const setError = (element, msg) => {
  const inputControl = element.closest('.space-y-1');
  const errorMsg = inputControl.querySelector('.error');
  element.classList.add('border-red-500');
  element.classList.remove('border-green-500');
  errorMsg.innerText = msg;
};

// Set success styling
const setSuccess = (element) => {
  const inputControl = element.closest('.space-y-1');
  const errorMsg = inputControl.querySelector('.error');
  element.classList.remove('border-red-500');
  element.classList.add('border-green-500');
  errorMsg.innerText = '';
};

// Add submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInputs()) {
    // Hide the form
    form.classList.add('hidden');

    // Show success message
    successMessage.classList.remove('hidden');
  }
});

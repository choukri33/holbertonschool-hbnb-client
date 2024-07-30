document.addEventListener('DOMContentLoaded', function() {
  // Function to handle login form submission
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      fetch('YOUR_BACKEND_API/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          document.cookie = `token=${data.token};path=/`;
          window.location.href = 'index.html';
        } else {
          alert('Login failed');
        }
      });
    });
  }

  // Function to fetch and display places
  const placeContainer = document.querySelector('main');
  if (placeContainer) {
    fetch('YOUR_BACKEND_API/places', {
      method: 'GET',


// Get the form element by ID
const form = document.getElementById('signup-form');

// Add an event listener to handle the form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission (page reload)

  // Get the input values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const address = document.getElementById('address').value;
  const state = document.getElementById('state').value;
  const pin = document.getElementById('pin').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Create the data object to send to the backend
  const userData = {
    name,
    email,
    password,
    phoneNumber,
    address,
    state,
    pin
  };

  // Send the data to the backend using Fetch API
  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // We're sending JSON data
      },
      body: JSON.stringify(userData) // Convert the user data to JSON
    });

    // Handle the response
    const data = await response.json();

    if (response.ok) {
      // If signup is successful, show a success message
      alert('Signup successful!');
    } else {
      // If there's an error, show the error message
      alert('Error: ' + data.message);
    }
  } catch (err) {
    // Catch any errors from the fetch request
    alert('Error: ' + err.message);
  }
});

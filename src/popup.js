// src/popup.js
document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the button click event
  function handleAutofillButtonClick() {
    // Get the form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var zipCode = document.getElementById('zipCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Log the form values to the console
    console.log('Form submitted! Values:', {
      firstName,
      lastName,
      address,
      city,
      country,
      state,
      zipCode,
      phoneNumber,
    });

    // You can add additional logic here as needed
  }

  // Add an event listener to the button
  document.getElementById('autofillButton')?.addEventListener('click', handleAutofillButtonClick);
});

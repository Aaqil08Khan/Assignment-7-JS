// Task 4: Form Validation
// Enhance the previous program to include form validation using JavaScript. Perform the following tasks:
// 1. Create an HTML form with input fields and a submit button.
// 2. Use JavaScript to validate the form inputs based on specific conditions (e.g., required fields, email format).
// 3. Display error messages for invalid inputs and prevent form submission if any fields are invalid.




// ---------------------------------Form validation work here---------------------------------

// Select the form Elements and all the other elements from html
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

// Email regex for format checking
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous Messages
  errorMessage.textContent = "";
  successMessage.textContent = "";
  nameInput.classList.remove("error", "success");
  emailInput.classList.remove("error", "success");

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    valid = false;
    errorMessage.textContent += "Name is required.";
    nameInput.classList.add("error");
  } else {
    nameInput.classList.add("success");
  }

  //   validate age
  if (
    ageInput.value.trim() === "" ||
    isNaN(ageInput.value) ||
    ageInput.value < 1 ||
    ageInput.value > 120
  ) {
    valid = false;
    errorMessage.textContent += "Enter a valid age. ";
    ageInput.classList.add("error");
  } else {
    ageInput.classList.add("success");
  }

  // Validate email
  if (!emailPattern.test(emailInput.value.trim())) {
    valid = false;
    errorMessage.textContent += "Enter a valid email. ";
    emailInput.classList.add("error");
  } else {
    emailInput.classList.add("success");
  }

  // Final Check
  if (valid) {
    successMessage.textContent = "Form submitted successfully! ";
    form.reset();
    nameInput.classList.remove("success", "error");
    ageInput.classList.remove("success", "error");
    emailInput.classList.remove("success", "error");
  }
});

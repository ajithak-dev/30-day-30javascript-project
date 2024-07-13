function validate() {
  const username = document.querySelector("#username").value.trim(); // Trim whitespace from input
  const password = document
    .querySelector('input[name="password"]')
    .value.trim();
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const hdyk = document.querySelector("#hdyk").value;

  if (!username) {
    alert("Please enter the username.");
    return false;
  }

  if (!password) {
    alert("Please enter the password.");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (!genderChecked) {
    alert("Please select a gender.");
    return false;
  }

  if (!hdyk) {
    alert("Please select how you heard about us.");
    return false;
  }

  return true;
}

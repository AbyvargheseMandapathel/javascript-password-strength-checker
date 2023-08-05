document.getElementById("password").addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthMeter = document.getElementById("result");

  // Regular expressions to check password criteria
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // Check password against each criteria
  const isLengthValid = lengthRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Calculate the password strength
  let strength = 0;
  if (isLengthValid) strength++;
  if (hasUppercase) strength++;
  if (hasLowercase) strength++;
  if (hasNumber) strength++;
  if (hasSpecialChar) strength++;

  // Define strength levels and messages
  const strengthLevels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
  const strengthMessage = strength >= strengthLevels.length ? strengthLevels[strengthLevels.length - 1] : strengthLevels[strength];

  // Update the result text based on the password strength
  strengthMeter.textContent = `${strengthMessage}`;
}

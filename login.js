$(document).ready(function() {
    const username = localStorage.getItem("username");
    if (username) {
        window.location.href = window.location.origin + "/index.html";
    }
});

const loginFormElement = $("#login-form");
if (loginFormElement) {
  loginFormElement.on("submit", (event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the values of the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    window.location.href = window.location.origin + "/index.html";
  });
}

// Get the current year
const currentYear = new Date().getFullYear();
  
// Update the current year in the footer
const currentYearElement = $("#currentYear");
if (currentYearElement) {
  currentYearElement.text(currentYear.toString());
}

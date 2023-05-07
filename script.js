$(document).ready(function() {
  const username = localStorage.getItem("username");
  if (!username) {
      window.location.href = window.location.origin + "/login.html";
  }
});

const logoElement = $("#logo");
if (logoElement) {
  logoElement.on("click", () => {
    window.location.href = window.location.origin + "/index.html";
  })
}

const systemElement = $(".system");
if (systemElement) {
  systemElement.on("click", (currentElement) => {
      const system = currentElement.target.dataset.systemName;
      window.location.href = window.location.origin + "/system.html?system=" + system;
  })
}


const logoutElemet = $("#logout");
if (logoutElemet) {
  logoutElemet.on("click", () => {
    localStorage.clear();
    window.location.href = window.location.origin + "/login.html";
  })
}

// Get the current year
const currentYear = new Date().getFullYear();
  
// Update the current year in the footer
const currentYearElement = $("#currentYear");
if (currentYearElement) {
  currentYearElement.text(currentYear.toString());
}
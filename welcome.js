// let firstLogin = localStorage.getItem("first_login") === "true";
// if (firstLogin) {
//     document.addEventListener("DOMContentLoaded", function() {
//         setTimeout(function() {
//             var welcomeElement = $("#welcome");
//             welcomeElement.addClass("fade-out");
//         }, 3000); // 3 seconds
    
//         setTimeout(function() {
//             var welcomeElement = $("#welcome-2");
//             welcomeElement.addClass("fade-out");
//         }, 6000); // 6 seconds
//         localStorage.setItem("first_login", "false");
//     });
// } else {
//     let welcomeElement = $("#welcome");
//     if (welcomeElement) {
//         welcomeElement.css("display", "none");
//     }
//     welcomeElement = $("#welcome2");
//     if (welcomeElement) {
//         welcomeElement.css("display", "none");
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function () {
//         setTimeout(function() {
//         let welcomeElement = $("#welcome");
//         welcomeElement.addClass("fade-out");
//     }, 3000); // 3 seconds


//     setTimeout(function() {
//         let welcomeElement = $("#welcome-2");
//         welcomeElement.addClass("fade-out");
//     }, 6000); // 6 seconds
//     }, 100);
// });
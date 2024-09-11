document.querySelector(".suc-message").innerHTML = localStorage.getItem("userName") + " " + "entered success"

function home() {
    window.location.href = "index.html";
    localStorage.removeItem("fullName");
    localStorage.removeItem("userName");
    localStorage.removeItem("email")
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("passwordName");
    localStorage.removeItem("confirmPassword");
    localStorage.removeItem("gender")
}
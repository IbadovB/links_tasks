document.querySelector(".suc-message").innerHTML = localStorage.getItem("userName") + " " + "entered success"

function logout() {
    window.location.href = "index.html";
    localStorage.clear();
 
}
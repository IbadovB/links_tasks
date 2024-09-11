 document.querySelector(".suc-message").innerHTML =  localStorage.getItem("fullName") + " " +  localStorage.getItem("userName") + " " + "registered success"


 function login () {
 window.location.href = "login.html"
 }
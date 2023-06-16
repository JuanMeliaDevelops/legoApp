
var userEmail = localStorage.getItem("userEmail");

document.getElementById("usuarioAdmin").innerText = userEmail;

if (!userEmail){
    window.location.href = "admin.html";
}

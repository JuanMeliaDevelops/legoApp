/* Login panel admin 
*/

async function loginAdmin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    const loginData = {
        email,
        password
    }

    const requestOptions = {
        method: "post",
        body: JSON.stringify(loginData),
        headers: {
            "Content-Type": "application/json"
        }

    };

    try {

        const response = await fetch('https://sea-feliz.up.railway.app/login', requestOptions);
        const data = await response.json();


        localStorage.setItem("x-token", data.token)

        if (localStorage.getItem('x-token') == data.token) {
            localStorage.setItem("userEmail", email);
            window.location.href = "adminPanel.html";
        }
        else {
            document.getElementById("errorLogin").innerText = "Usuario Invalido";
        }
    }

    catch (error) {

        document.getElementById("errorLogin").innerText = "Se ha detectado un error en el servidor, porfavor intenta denuevo mas tarde";
        console.log("Error el login pa " + error)

    }

}

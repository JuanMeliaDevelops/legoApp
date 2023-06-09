/* Login panel admin 

ceredenciales:
eze@gmail.com
test

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

    console.log(JSON.stringify(loginData))
    try {

        const response = await fetch('https://sea-feliz.up.railway.app/login', requestOptions);
        const data = await response.json();


        localStorage.setItem("x-token", data.token)
        console.log(data)

        if (localStorage.getItem('x-token') == data.token) {
            window.location.href = "adminPanel.html";
        }
        else {
            window.location.href = "admin.html";
        }
    }

    catch (error) {
        console.log("Error el login pa " + error)

    }

}

const token = localStorage.getItem('x-token');
console.log(token)

async function uploadProduct() {

    let nombreProducto = document.getElementById("nombreProducto").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let dimensiones = document.getElementById("dimensiones").value;
    let categoria = document.getElementById("categoria").value;
    let stock = document.getElementById("stock").value;
    let img = document.getElementById("img").files[0];


    const formData = new FormData();
    formData.append("img", img);
    formData.append("nombre", nombreProducto);
    formData.append("categoria", categoria);
    formData.append("stock", parseInt(stock));
    formData.append("dimensiones", dimensiones);
    formData.append("precio", precio);
    formData.append("descripcion", descripcion);


    console.log(formData);


    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            "x-token": token,
        },
    };
    try {

        const response = await fetch('https://sea-feliz.up.railway.app/api/productos', requestOptions);
        const data = await response.json();

        console.log("Se esta intentando subir el producto.  ", data)

        if (data.msg == "Producto guardado") {
            document.getElementById("mensajeUpload").innerText = "El producto se ha registrado correctamente!";
            setTimeout(() => {
                window.location.href = "adminPanel.html";
            }, 3000);
        }



    }

    catch (error) {
        console.log("Error el subiendo un nuevo producto  ", error)

    }

}

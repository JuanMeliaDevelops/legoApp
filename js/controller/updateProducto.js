

async function updateProduct() {

    const token = localStorage.getItem('x-token');

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


    /* loader */

    document.getElementById("productoContainer").innerHTML = `
        
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
<div class="wheel"></div>
<div class="hamster">
    <div class="hamster__body">
        <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
        </div>
        <div class="hamster__limb hamster__limb--fr"></div>
        <div class="hamster__limb hamster__limb--fl"></div>
        <div class="hamster__limb hamster__limb--br"></div>
        <div class="hamster__limb hamster__limb--bl"></div>
        <div class="hamster__tail"></div>
    </div>
</div>
<div class="spoke"></div>
</div>
    `;



    const requestOptions = {
        method: "PUT",
        body: formData,
        headers: {
            "x-token": token,
        },
    };




    try {

        const response = await fetch(`https://sea-feliz.up.railway.app/api/productos/${id}`, requestOptions);
        const data = await response.json();

        console.log("Se esta intentando modificar el producto.  ", data)

        if (data.msg == "Producto actualizado") {
            /*    document.getElementById("mensajeUpdate").innerText = "El producto se modificó correctamente!"; */

            document.getElementById("productoContainer").innerHTML = `
         <h5 id="mensajeUpdate" class="alert-success text-center m-auto mt-2 col-3">El producto se modificó correctamente!</h5>
         `;
            setTimeout(() => {
                window.location.href = "adminPanel.html";
            }, 3000);
        }



    }

    catch (error) {
        console.log("Error modificando el producto  ", error)

    }



}

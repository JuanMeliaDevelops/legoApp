const token = localStorage.getItem('x-token');
console.log(token)

async function uploadProduct() {

    let nombreProducto = document.getElementById("nombreProducto").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;
    let stock = document.getElementById("stock").value;

    let img = document.getElementById("img").files[0];


    const producto = {
        nombreProducto,
        precio,
        categoria,
        stock,
        img
    };


    const formData = new FormData();
    formData.append("img", img);
    formData.append("producto", JSON.stringify(producto));


    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          "x-token": token,
        },
      };
    try {

        const response = await fetch('https://sea-feliz.up.railway.app/productos/', requestOptions);
        const data = await response.json();

        console.log("El producto se ha insertado correctamente.  ", data)



    }

    catch (error) {
        console.log("Error el subiendo un nuevo producto  ", error)

    }

}

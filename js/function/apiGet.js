
/* GET DE API */

async function fetchApi() {
  try {
    const response = await fetch('https://sea-feliz.up.railway.app/api/productos/');
    const data = await response.json();

    const listaDeProductos = document.getElementById('listaDeProductos');

    data.productos.forEach(producto => {

      const productoItem = document.createElement('div');
      productoItem.classList.add("producto");

      // Utilizar un template HTML
      productoItem.innerHTML = `
          <img  src="${producto.img}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <p>Categoria: ${producto.categoria}</p>
          <p>Stock: ${producto.stock}</p>
          `;

      listaDeProductos.appendChild(productoItem);
    });


    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();


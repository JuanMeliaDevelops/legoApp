const token = localStorage.getItem('x-token');
console.log(token)

async function deleteProduct(id) {

    const requestOptions = {
        method: 'DELETE',
        headers: {
            "x-token": token,
        },
    };

    try {

        const response = await fetch(`https://sea-feliz.up.railway.app/api/productos/${id}`, requestOptions);
        const data = await response.json();

        console.log('Producto eliminado:', data);

    }
    catch (error) {
        console.log('Error al eliminar el producto:', error);

    }

}
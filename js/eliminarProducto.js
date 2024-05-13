import { conexionAPI } from "./conexionApi.js";

const contenedorProductos = document.querySelector("[data-card]");

contenedorProductos.addEventListener('click', async (event) => {
    // Verificar si el clic ocurrió en el ícono de eliminar
    if (event.target.classList.contains('eliminar-icono')) {
        // Obtener el contenedor de la tarjeta del producto asociado al ícono de eliminar
        const tarjetaProducto = event.target.closest('.item');
        // se obtiene el valor del atributo de datos data-productId del elemento tarjetaProducto
        const idProducto = tarjetaProducto.dataset.productId;
        
        try {
             // Llamar a la función para eliminar el producto
            const eliminado = await conexionAPI.eliminarProduct(idProducto);
        
            if (eliminado) {
            // Si el producto se elimina correctamente, también debemos eliminar la tarjeta de producto del DOM
            tarjetaProducto.remove();
            }
         
        } catch (error) {
            alert(error)
        }
       
    }
});

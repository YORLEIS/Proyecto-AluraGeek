import { conexionAPI } from "./conexionApi.js";
import generarCard from "./showProducts.js";

const campoDeBusqueda = document.querySelector(".buscar__input");

async function obtenerProducto(e){
    // evitar recargar la pagina
    e.preventDefault();
    const datoBuscado= document.querySelector("[data-buscar]").value;
    const buscar = await conexionAPI.buscarProducto(datoBuscado)
    
// mostrar elementos encontrados
    const listCard = document.querySelector("[data-card]")
   
// eliminará todos los elementos hijos del elemento listCard al establecer su contenido HTML como una cadena vacía
    listCard.innerHTML = "";
    
    // creando elementos encontrados
    buscar.forEach(producto => listCard.appendChild(generarCard(producto.id, producto.nombre, producto.precio, producto.imagen)));

    if(buscar.length==0){
        const footer= document.querySelector('footer');
        const buscando= document.querySelector('.no-encontrado');
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        buscando.style.display = 'block'
        buscando.innerHTML= `<h2 class="no-encontrado">No fueron encontrados coincidencias para ${datoBuscado}</h2>`
    }
   
}

const btn = document.querySelector("[data-btn-buscar]")

btn.addEventListener("click", e=>obtenerProducto(e))

// para evento enter
campoDeBusqueda.addEventListener("keydown",function(event) {
    if (event.key === 'Enter') {
        obtenerProducto(event);
    }} );
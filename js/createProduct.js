import { conexionAPI } from "./conexionApi.js";

const formulario = document.querySelector("[data-form]")
const btnLimpiar = document.querySelector(".btn-limpiar")


async function createProduct(e){
// que no se ejecute por defecto el evento submit
    e.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value
    
    try {
        await conexionAPI.enviarProduct(nombre, precio, imagen)
        window.location.href="../pages/envio-finalizado.html"
    
    } catch (error) {
        alert(error)
    }
   
}

formulario.addEventListener("submit", e=> createProduct(e))



const nombreInput = document.querySelector("[data-nombre]");
const precioInput = document.querySelector("[data-precio]");
const imagenInput = document.querySelector("[data-imagen]");

// Limpiando formulario
function limpiarBtn() {
    if (nombreInput.value.length > 0 || precioInput.value.length > 0 || imagenInput.value.length > 0) {
        nombreInput.value = "";
        precioInput.value = "";
        imagenInput.value = "";
    }
}

btnLimpiar.addEventListener('click', limpiarBtn);


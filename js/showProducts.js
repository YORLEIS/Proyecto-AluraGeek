
import { conexionAPI } from "./conexionApi.js";

const listCard = document.querySelector("[data-card]")

export default function generarCard(id, nombre, precio, imagen) {
    const product = document.createElement('div')

    product.className = 'item';
    product.dataset.productId = id; 
    product.innerHTML = `<figure>
            <img src="${imagen}" alt="producto" >
        </figure>

        <div class="info-producto">
            <h2>${nombre}</h2>
            <p class="precio">$ ${precio}</p>
            <i class="material-icons eliminar-icono">delete</i>
        </div>`

        return product;
}

async function listProduct(){
    try {
        const dataApi = await conexionAPI.listarProductos()

        dataApi.forEach(producto => listCard.appendChild(generarCard(producto.id, producto.nombre, producto.precio, producto.imagen)))
            
    } catch{
      
        const errorContainer = document.getElementById('errorContainer');
        const footer= document.querySelector('footer');
        errorContainer.style.display = 'block'; // Mostrar el contenedor de error    
       footer.style.position = 'fixed';
       footer.style.bottom = '0';
    }
    
} 

listProduct()


// async function showCard(){
//     const dataApi = await conexionAPI.listarProductos()

//     dataApi.forEach(elemento => {
//        const card = document.querySelector("[data-card]")   
//         const contenido = `
//         <div class="item">
//             <figure>
//             <img src="${elemento.imagen}" alt="producto" >
//             </figure>

//             <div class="info-producto">
//             <h2>${elemento.nombre}</h2>
//             <p class="precio">$ ${elemento.precio}</p>
//             <i class="material-icons">  delete </i>
//             </div>
//         </div>`
       
          
        
//           card.innerHTML = card.innerHTML + contenido; 
//       });
      
// }

// showCard()
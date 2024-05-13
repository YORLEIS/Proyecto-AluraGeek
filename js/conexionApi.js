async function listarProductos(){
    // peticion de tipo Get
    const conexion = await fetch('http://localhost:3004/productos')
    
    const conexionConvertida =  conexion.json()
    
    return conexionConvertida
    // console.log(conexionConvertida);

}


// Agregando productos con POST
async function enviarProduct(nombre, precio, imagen){
    const conexion = await fetch('http://localhost:3004/productos', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            nombre: nombre,
            precio:precio,
            imagen: imagen
        })
    })
    const conexionConvertida = conexion.json()
    if (!conexion.ok) {
        throw Error("ocurrio un error al guardar el producto")
        
    }
    return conexionConvertida
}

// Busqueda
async function buscarProducto(palabra){
    const url = `http://localhost:3004/productos`;
    const respuesta = await fetch(url);
    const productos = await respuesta.json();
    
    // includes, verificamos si la palabra de búsqueda está contenida dentro del nombre del producto convertido a minúsculas
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(palabra.toLowerCase()));
    return productosFiltrados;
}

// Delete
async function eliminarProduct(id) {
   
        console.log('ID del producto a eliminar:', id);
        const conexion = await fetch(`http://localhost:3004/productos/${id}`, {
            method: 'DELETE'
        });

        if (!conexion.ok) {
            throw Error("ocurrio un error al eliminar el producto")
           
        } else {
           alert('El producto se elimino correctamente')
          
        }
    } 





export const conexionAPI={
    listarProductos, enviarProduct, buscarProducto, eliminarProduct
}

// const carrito = document.querySelector("#carrito");
const listacarrito =document.querySelector("#listacarrito tbody");
const listaProductos = document.querySelector("#lista-carrito");

let articulosCarrito = [];

listaProductos.addEventListener('click', agregarProducto)

function agregarProducto(e){
    e.preventDefault();//Evitando la accion por default de ese boton. 
   if(e.target.classList.contains("alignbtn-compras")){
       //Selecciono el div del producto sobre el cual se hizo click       
       //Selecciono y me voy al hijo y luego al padre
   }
   const productoSeleccionado = e.target.parentElement.parentElement
   console.log(productoSeleccionado.querySelector('img').src);
   console.log(productoSeleccionado.querySelector('.compra-producto').textContent)
   obtenerDatosPorducto(productoSeleccionado)
   //Sobre que se hace click e.target para detectarlo//Probando. 
}

/**Info extraccion producto seleccionado */
function obtenerDatosPorducto(producto){    

    const productoAgregado = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('.compra-producto').textContent,
        precio: producto.querySelector('.descripcion-producto'),
        // id: producto.querySelector(''),getAttribute("data-id")
        cantidad: 1
    }
    const existe = articuloCarrito.some(producto => producto.nombre === productoAgregado.nombre)
    const productos = articulosCarrito.map()
    if(producto.nombre === productoAgregado.nombre){
       producto.cantidad++;       
       return producto;
    }else{
        return producto;
        
    }

   let articulosCarrito = [...productos]
}

// agregar producto al carrito

articulosCarrito = [...articulosCarrito, productoAgregado];
// articulosCarrito.push(producto);
function insertarProducto()
console.log(articulosCarrito)


// agregado al html
function insertarProducto(){

    borrarHTML();

    articulosCarrito.forEach(producto =>{
        // destructuring sobre objeto producto
        const {nombre, imagen, precio, cantidad } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src=$"{imagen}" width=100>
        </td>
        <td>
        ${nombre}
        </td>
          <td>
          ${precio}
          </td>
          <td>
          ${cantidad}
          </td>
          <td>
          <a href="#" class="borrar-producto"> X</a>
          </td>

          `

          contenedorCarrito.appendChild(row);
        
        
        
    })

    function borrarHTML(){
         contenedorCarrito.innerHTML ='';
        // while(contendorCarrito.firstChild){
        //     contenedor.Carrito.removeChild(contenedorCarrito.firstChild)

        // }
    }
}
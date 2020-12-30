//Declaraciones. 
const car = document.querySelector(".listCarrito");//Carro
const carInside = document.querySelector('#lista-de-carrito tbody');//Dentro de carro la lista vacia. 
const listProducts = document.querySelector("#lista-carrito");//Me traigo la lista de products del section del idlista-carrito
const btncarDeleteComplete = document.querySelector('#vaciar-carrito');//Traigo el boton "vaciar carrito"
let articleCar = [];

listProducts.addEventListener('click', addProduct);//Hacer click en el IDlista-carrito que es el section de productos
btncarDeleteComplete.addEventListener('click', carDeleteComplete);
// car.addEventListener('click', deleteProduct);//quedapendiente
// document.addEventListener('DOMContentLoaded', () => {
//     articleCar =  JSON.parse(localStorage.getItem('car')) || [];//guarda el carrito JSON obtenelo y guardalo en car, y luego our array vacio
//     insertProducto();
// })


/*Agregar producto*/
function addProduct(e){//Cuando se haga el evento click se ejecuta esta funcion. e para el default para las acciones del Event
    e.preventDefault();//Evitando la accion por default de ese botón.(Event)
    if(e.target.classList.contains('alignbtn-compras')){//Agarro la clase en la cual esta el botón
        const productSelect = (e.target.parentElement);//Me posiciono en el padre del item seleccionado 
        console.log(productSelect.querySelector('.precio-producto').textContent);//vemos cuando hacemos click el precio de lo que hacemos click
        
        getProduct(productSelect);//llamamos a la funcion y le pasamos los datos. 
    };   
}
/*Deletiar producto QUEDA PENDIENTE*/
// function deleteProduct(e){
    
//         if(e.target.classList.contains('deleteProduct')){
//       const productId = e.target.getAttribute('data-id');
//      articleCar = articleCar.filter(product => product.id !== productId)//filtramos y nos quedamos con todos los elementos que no tengan ese id
       
//       insertProducto();//Como borramos, luego de nuevo iniciamos la funcion de carga los productos. 
//   }
// }

function getProduct(product){
    //info del product seleccionado, llenado de datos pasados a traves de productSelect
    const datproduct = {//Creamos un objeto para rellenar los datos extraidos por productSelect
        imagen: product.querySelector('.compras-img').src,//Traemos la imagen, y ponemos el atributo que queremos seleccionar
        nombre: product.querySelector('.compra-producto').textContent,
        precio: product.querySelector('.precio-producto').textContent,
        id: product.querySelector('button').getAttribute('data-id'),//Del btn traemos el atributo del ID. 
        cantidad: 1//Cantidad por defecto
    }

    const ProductExisting = articleCar.some(function(product){//verirficando si el producto esta en el carro
        return product.id === datproduct.id;//verificamos que el id del producto agregado no sea igual al que esta
    })
    //agregar producto existente
    if(ProductExisting){
        const productos = articleCar.map(product =>{
            if(product.id === datproduct.id){
                product.cantidad++;//si coincide aumento su propiedad en una cantidad ++1 y si no.. seguimos
                product.precio = `$${Number(datproduct.precio.slice(1))*product.cantidad}`;//precio nuevo,(YA QUE ESTA EL SIGNO $) slice elige donde inicia, el parametro empieza en 0 1 2, Se QUEDA CON EL PRIMER CARACTER EN ADELANTE. 
                return product;
            }else{
                return product;
            }
        });//recorre arreglo parecido al forechnuevo y me lo genera
        articleCar =[...productos]
    }else{
        //agregar producto inexistente
        articleCar.push(datproduct);
    }

 //Agregado al car
    insertProducto();
    
}

function insertProducto(){

    deleteHTML();//VACIOCAR
    initHTML();
    articleCar.forEach(product => {//Recorrer el array y que nos brinde la info 
        //Prueba destructuring sobre el obj producto 
        const {nombre, imagen, precio, cantidad, id} = product;//HACiendo el destructuring se pueden usar las variables luego
        const row = document.createElement('tr');//Creamos un row para crear un elemento tr 
        row.innerHTML =  ` 
        <td>
            <img src="${imagen}" width="50px" height="50px" class="align-img-car">
        </td>     

        <td>
            <p class="align-car">${nombre}</p>
        </td>

        <td>
            <p class="align-car">${precio}</p>
        </td>

        <td>
            <p class="align-car">${cantidad}</p>
        </td>
        <td>
            <a href="#" class=deleteProduct data-id="${id}"> X </a>
        </td>
        
        `
        carInside.appendChild(row);//agregamos el row al appenChild
    })

    saveStorage();
}

function saveStorage(){
    localStorage.setItem("car", JSON.stringify(articleCar))//seleccionamos el item, luego lo pasamos a string de JSON, y luego añadimos el array de carro.
}


function carDeleteComplete(){
    deleteHTML();//LLamamos a la funcion encargada de elimar, 
    let articleCar = [];//Luego traemos al carrito de nuevo que maneja todo 
    saveStorage();   
}

function deleteHTML(){//COMO ESTO BORRA LA DESC DEL CARRO DE AGREGO LA FUNCION INITHTML
    // carInside.innerHTML = '';//VACIOCAR
    while(carInside.firstChild){
        carInside.removeChild(carInside.firstChild)
    }
}

function  initHTML(){//Como deletHTML borra la desc del carro se agrego la funcion tal.
    const row = document.createElement('tr');
    carInside.innerHTML = `
    <td class="spacing-card">IMAGEN</td> 
    <td class="spacing-card">NOMBRE</td>
    <td class="spacing-card">PRECIO</td>
    <td class="spacing-card">CANTIDAD</td>
    ` 
    carInside.appendChild(row);
}


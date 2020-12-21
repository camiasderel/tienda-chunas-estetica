class carrito{
    //Añadir producto al carrito:
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('btn-Formato-special')){
           const producto = e.target.parentElement.parentElement;
           this.leerDatosProducto(producto);
        }
    }

}
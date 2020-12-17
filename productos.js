//-----------------Datos de productos. ----------------------------//
//Constructor
function Producto(id, nombre, descripcion, cantidad, precio, imagen){
    this.id= id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.cantidad=cantidad;
    this.precio=precio;
    this.imagen=imagen;
    }
    //Instanciar constructor
    //Nutricion-
    let producto0=new Producto(0, "Revividor capilar", "Libre de formol con aceite de lino y risino", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto1=new Producto(1, "Levanta muertos", "Libre de formol con 8 aceites esenciales", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto2=new Producto(2, "Cauterización capilar", "Libre de formol keratina y colageno", "250ml.", 400.00, "images/Productos/VACIO_2.jpg");
    let producto3=new Producto(3, "Laminado premium", "Libre de formol con keratina hidroalisada", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto4=new Producto(4, "Oro líquido", "Libre de formol con aceites escenciales", "250ml.", 400.00, "images/Productos/VACIO_2.jpg");
    let producto5=new Producto(5, "Lifting capilar", "con colageno y acido hialuronico", "250ml.", 400.00, "images/Productos/VACIO_2.jpg");
    let producto6=new Producto(6, "Aceite nutritivo", "Lino / Risino / Palta / Coco", "150ml.", 280.00, "images/Productos/VACIO_2.jpg");
    let producto7=new Producto(7, "Ampollas", "botox/multivitaminicas /anticaspas", "50ml.", 200.00, "images/Productos/VACIO_2.jpg");
    //Alisados-
    let producto8=new Producto(8, "Alisado 3D fuerte", "Glicerina, argan, Alto concentrado", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto9=new Producto(9, "Alisado espejo", "Glicerina, argan, formol", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto10=new Producto(10, "Alisado nanoesferas", "nanoesferas de celulas madre", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto11=new Producto(11, "Alisado con biotina", "Biotina y formol", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto12=new Producto(12, "Alisado con keratina", "Keratina y formol", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto13=new Producto(13, "Alisado con botox", "botox y formol", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto14=new Producto(14, "Alisado biomolecular", "multivitaminas y formol", "250ml.", 400.00, "images/Productos/VACIO_2.jpg");
    //Keratinas-
    let producto15=new Producto(15, "Shock de keratina", "Libre de formol con keratina", "250ml.", 430.00, "images/Productos/VACIO_2.jpg");
    let producto16=new Producto(16, "Baño de keratina", "Libre de formol coco, almendra, argan", "250ml.", 430.00, "images/Productos/VACIO_2.jpg");
    //Shampoos
    let producto17=new Producto(17, "Shampoo post-alisado", "Ph acido, y regenerantes", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto18=new Producto(18, "Shampoo con biotina", "Biotina, romero, ortiga", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto19=new Producto(19, "Shampoo anti-caspa", "Libre de formol con coco", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto20=new Producto(20, "Shampoo keratina/botox", "botox / keratina", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto21=new Producto(21, "Shampoo neutro", "Componente organico unico", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto22=new Producto(22, "Shampoo Matizador Black", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto23=new Producto(23, "Shampoo Matizador Blue", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto24=new Producto(24, "Shampoo Matizador Violet", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    //Acondicionadores
    let producto25=new Producto(25, "Acondicionador post-alisado", "Ph acido, y regenerantes", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto26=new Producto(26, "Acondicionador con biotina", "Biotina, romero, ortiga", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto27=new Producto(27, "Acondicionador anti-caspa", "Libre de formol con coco", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto28=new Producto(28, "Acondicionador keratina/botox", "botox / keratina", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto29=new Producto(29, "Acondicionador neutro", "Componente organico unico", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto30=new Producto(30, "Acondicionador Matizador Black", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto31=new Producto(31, "Acondicionador Matizador Blue", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    let producto32=new Producto(32, "Acondicionador Matizador Violet", "Colorantes organicos", "250ml.", 350.00, "images/Productos/VACIO_2.jpg");
    //Matizadores
    let producto33=new Producto(33, "Matizador Black", "Colorantes organicos", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto34=new Producto(34, "Matizador Blue", "Colorantes organicos", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto35=new Producto(35, "Matizador Violet", "Colorantes organicos", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    let producto36=new Producto(36, "Matizador Rojo intenso", "Colorantes organicos", "250ml.", 450.00, "images/Productos/VACIO_2.jpg");
    //Cremas para peinar
    let producto37=new Producto(37, "Crema acida", "Ph acido", "250ml.", 430.00, "images/Productos/VACIO_2.jpg");
    let producto38=new Producto(38, "Crema para peinar", "Coco lino risino y germen de trigo", "250ml.", 430.00, "images/Productos/VACIO_2.jpg");
    let producto39=new Producto(39, "Jalea para rulos", "Gel y efecto rulos, libre de formol", "250ml.", 430.00, "images/Productos/VACIO_2.jpg");
    
    
    let carrito = [];
     // for(i = 0; i > carrito.length; i++){
    let total = 0;
    
    var array =[producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7,
         producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15,
         producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, 
         producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31,
         producto32, producto33, producto34, producto35,  producto36,  producto37,  producto38,  producto39]
    console.table(array);

    


    // Producto36.precio

    // agregar_producto();


    // const boton = document.querySelector('#boton')
    // boton.addEventListener('click', function(){
    // alert('pt de curso ')
    // } )


    // function agregar_producto(Producto){        
    //     if(producto == Producto){
    //         total = Producto.precio + producto;
    //     }else{
    //         alert("No existe producto")
    //     }

        // let subtotal = 0;
        // total = Producto.precio + subtotal;    
        
    // }
    
    
    
    // function quitar_producto(Producto){
    
    // }
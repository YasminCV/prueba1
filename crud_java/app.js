// DOM
    document 
    .getElementById("producto-formulario")
    .addEventListener("sbmit", function (elemento){
        elemento.preventDefault() //evalua el comportamiento del elmento 
   
   //obtener valores del oformulario
   const nombre = document.getElementById("name").value,
   precio = document.getElementById("precio").value,
   año = document.getElementById("año").value;
   

   // crear nuevo producto 
   const producto = new 
   producto (nombre,preio,año)

   //crear nuevo usuario 
   const usuario = new Usuario();

   //boton de validacion 
   if(nombre==="" || precio ==="" ||año ===""){
       usuario.showMessage("por favor insertar nombre de usuario");
   }

   //guardar producto 
   usuario.AddProducto(producto);
   usuario.showMessage("producto agregado correctamente");
   usuario.resetForm();

    });

    document.getElementById("lista producto")
    .addEventListener("click k", (elemento)=>{
        const usuario = new Usuario();

        usuario.deleteProduct(elemento.target);
        elemento.preventDefault();
    });

    //producto clase 
    export class Producto{
        constructor(nombre, precio, año){
            this.nombre = nombre;
            this.precio = precio;
            this.año = año;
        }
    }
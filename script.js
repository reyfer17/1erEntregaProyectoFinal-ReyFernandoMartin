let precioCombo
let pedido = [0,0,0]
let productoPedido = [0,0,0]
let modificarCompra
let entrada = "s"
let validarCombo = 0
let productoAEliminar = 0
let valorInicialI = 0
let banderaReemplazo

//creacion de clase
class Producto {
    constructor(nombre, codigo, precio, detalle, validacionCombo){
    this.nombre = nombre
    this.codigo = codigo
    this.precio = precio
    this.detalle = detalle
    this.validacionCombo = validacionCombo
    }
    //creacion de metodos
    crearCombo(producto1,producto2,producto3) {  
     do {modificarCompra = prompt("Su pedido consta de :\n" +
     producto1.nombre + "\n"+
     producto2.nombre + "\n"+
     producto3.nombre + "\n"+
     "El total parcial es :" + this.totalizar(producto1, producto2, producto3) +
     "¿Desea reemplazar algún elemento del combo?(S/N)").toLowerCase () 
     this.validarCompra(modificarCompra)
     }while (modificarCompra != "s" && modificarCompra != "n" )
    }

    totalizar(producto1,producto2,producto3){
        return precioCombo =producto1.precio+producto2.precio+producto3.precio
    }

    validarCompra(entrada){
        if(entrada != "s" && entrada != "n"){
            alert("ERROR: entrada no válida \n ingrese -S- para modificar su compra \n Ingrese -N- para obtener su ticket ")
        } else if(entrada=="n"){
            alert("¡Gracias por su compra! Retire el ticket por ventanilla\n(pulse aceptar para obtenerlo)")       
        } else {
        this.eliminarYReemplazarProducto()}
    }   

    emitirTicket(producto1, producto2, producto3){
        alert("TICKET DE COMPRA :\n" + 
        producto1.nombre + " " + producto1.detalle +" $"+producto1.precio+"\n" +
        producto2.nombre + " " + producto2.detalle +" $"+producto2.precio+"\n" +
        producto3.nombre + " " + producto3.detalle +" $"+producto3.precio+"\n" +
        "--------------------------------------------------------------------\n" +
        "TOTAL parcial: $" + precioCombo +"\n" +
        "--------------------------------------------------------------------\n" +
        "TOTAL con descuento del 10% por COMBO: $" + precioCombo*0.9 +"\n" 
        )
    }
    eliminarYReemplazarProducto(){
        do{productoAEliminar = prompt("¿Que producto desea reemplazar?:\n" +
     "1 " + productoPedido[0].nombre + "\n"+
     "2 " + productoPedido[1].nombre + "\n"+
     "3 " + productoPedido[2].nombre + "\n")
    this.validarReemplazo()} while (banderaReemplazo == 0)
     productoPedido.splice(productoAEliminar-1,1)
     valorInicialI =2
     testearCombo()
     producto1.crearCombo(productoPedido[0],productoPedido[1],productoPedido[2])
    }
    validarReemplazo(){
        if (productoAEliminar!=1 && productoAEliminar!=2 && productoAEliminar !=3){
        banderaReemplazo = 0
        alert("ERROR: Ingrese un numero entre 1 y 3")}
        else {banderaReemplazo = 1}
    }
}
//creacion de objetos
const gaseosaGrande = new Producto ("Gaseosa grande",3, 500, "500ml",1)
const gaseosaMediana = new Producto ("Gaseosa mediana",2, 400, "300ml",1)
const gaseosaChica = new Producto ("Gaseosa chica",1, 300, "200ml",1)
const pochoclosGrandes =new Producto("Pochoclos grandes",6,1000, "en balde",3)
const pochoclosMedianos =new Producto("Pochoclos medianos", 5,800, "en caja",3)
const pochoclosChicos =new Producto("Pochoclos chicos", 4,600, "en bolsa",3)
//creacion de arrays
let productos = [0, gaseosaChica, gaseosaMediana, gaseosaGrande, pochoclosChicos, pochoclosMedianos, pochoclosGrandes]
const lista =  productos[1].codigo +" "+ productos[1].nombre + " $"+productos[1].precio + "\n" +
productos[2].codigo +" "+ productos[2].nombre + " $"+productos[2].precio + "\n" +
productos[3].codigo +" "+ productos[3].nombre + " $"+productos[3].precio + "\n" +
productos[4].codigo +" "+ productos[4].nombre + " $"+productos[4].precio + "\n" +
productos[5].codigo +" "+ productos[5].nombre + " $"+productos[5].precio + "\n" +
productos[6].codigo +" "+ productos[6].nombre + " $"+productos[6].precio 


function Combo(valorInicialI){    for(i=valorInicialI;i<3;i++){
        do {pedido[i] = parseInt(prompt("CREE SU PROPIO COMBO\n Seleccione el producto a agregar \n(Para crear un combo seleccione un pochoclo y 2 gaseosas)\n"+lista))
        validarProducto()
        } while((pedido[i] <1 || pedido[i]>6)||isNaN(pedido[i]))
    }
}
function validarProducto(){if ((pedido[i] <1 || pedido[i]>6)||isNaN(pedido[i])){
    alert("Ingrese un numero entre 1 y 6 para completar su combo")
} else {productoPedido[i]=productos[pedido[i]]}
}
function testearCombo() { do {Combo(valorInicialI)
    validarCombo=0
    productoPedido.forEach(producto =>{
        validarCombo+=producto.validacionCombo
    })
    if (validarCombo != 5){alert("ERROR: Recuerde que para crear su combo debe ingresar 2 gaseosas y 1 pochoclo")}
}while(validarCombo!= 5)

}


testearCombo()
let producto1 = new Producto
let producto2 = new Producto 
let producto3 = new Producto 

//prueba de metodos
producto1.crearCombo(productoPedido[0],productoPedido[1],productoPedido[2])
producto1.emitirTicket(productoPedido[0],productoPedido[1],productoPedido[2])

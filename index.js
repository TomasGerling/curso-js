function calcular_precio (cantidad_producto, precio_producto){
    if ( cantidad_producto >= 1){
        console.log (`usted debe pagar: $${precio_producto * cantidad_producto} ¡el envio es gratis! `)
    }
    else if( cantidad_producto <= 0){
        console.log ("usted selecciono una cantida erronea")
    }

};
function ingresar_datos(){
    let nombre_cliente = prompt("Ingrese su nombre completo");
    let direccion_cliente = prompt("Ingrese su direccion para el envio o si retira en el local");
    let producto_cliente = prompt("Ingrese que alimento desea comprar");
    let precio_producto = prompt("Ingrese el valor por KG del producto");
    let cantidad_producto = prompt("Ingrese cuanto quiere comprar (numero)");
    return [nombre_cliente, direccion_cliente, producto_cliente, precio_producto, cantidad_producto]
}
class Alimentos{
    constructor(product_id, nombre_alimento, cantidad_producto, peso_por_bolsa, tipo_mascota, precio_bolsa, precio_kg, imagen_bolsa){

        this.product_id = product_id;
        this.nombre_alimento = nombre_alimento;
        this.cantidad_producto = cantidad_producto;
        this.peso_por_bolsa = peso_por_bolsa;
        this.tipo_mascota = tipo_mascota
        this.precio_bolsa = precio_bolsa
        this.precio_kg = precio_kg
        this.imagen_bolsa = imagen_bolsa
    }
}

let lista_alimentos = [
    {
        product_id: 1,
        nombre_alimento:"Energy Food Adulto",
        cantidad_producto:15,
        peso_por_bolsa:20,
        tipo_mascota:"Perro",
        precio_bolsa:4700,
        precio_kg:290,
        imagen_bolsa:"/img/Energy_food_adulto_perro.jpg"
    },
    {
        product_id: 2,
        nombre_alimento:"Excellent Gato Adulto",
        cantidad_producto:1,
        peso_por_bolsa:15,
        tipo_mascota:"Gato",
        precio_bolsa:5500,
        precio_kg:500,
        imagen_bolsa:"/img/Excellent_adulto_perro.jpg"
    },
    {
        product_id: 3,
        nombre_alimento:"Sieger Criadores",
        cantidad_producto:2,
        peso_por_bolsa:20,
        tipo_mascota:"Perro",
        precio_bolsa:5500,
        precio_kg:300,
        imagen_bolsa:"/img/Sieger_adulto_perro.jpg"
    },
    {
        product_id: 4,
        nombre_alimento:"Sabrositos Gato Adulto Mix",
        cantidad_producto:3,
        peso_por_bolsa:15,
        tipo_mascota:"Gato",
        precio_bolsa:4200,
        precio_kg:300,
        imagen_bolsa:"/img/Sabrositos_adulto_gato.jpg"
    },
]
// Para agregar un nuevo producto al array
// for( let i = 0; i < 1 ; i++){
//     let product_id = parseInt(prompt("Ingrese el id del producto"));
//     let nombre_alimento = prompt("Ingrese el nombre del producto");
//     let cantidad_producto = parseInt(prompt("Ingrese cuantas bolsas tiene disponible *En numeros*"));
//     let peso_por_bolsa = parseFloat(prompt("Ingrese cuanto pesa cada bolsa *Solo el numero*"));
//     let tipo_mascota = prompt("Ingrese el tipo de mascota *Perro, Gato u Otro*");
//     let precio_bolsa = parseInt(prompt("Ingrese el precio de venta por Bolsa *Solo el numero*"));
//     let precio_kg = parseInt(prompt("Ingrese el precio de venta por KG*Solo el numero*"));
//     let imagen_bolsa = prompt("Ingrese el url de la imagen de la bolsa");
//     let alimento_nuevo = new Alimentos(product_id, nombre_alimento , cantidad_producto , peso_por_bolsa, tipo_mascota, precio_bolsa, precio_kg, imagen_bolsa);

//     lista_alimentos.push(alimento_nuevo);
// }

console.log("Bienvenide a Peluditos Petshop");

// console.log(lista_alimentos)

// let datos = ingresar_datos();
// for (let i = 0; i < datos.length; i++){
//     console.log(datos[i]);
// }

// calcular_precio(datos[4], datos[3])

// Metodos de busqueda y transformacion
let barato = lista_alimentos.filter(nombre_alimento => nombre_alimento.precio_bolsa <= 5000)
console.log(barato);


let lista_productos = lista_alimentos.map(product_id => product_id.nombre_alimento)
console.log(lista_productos);

let buscar_producto = lista_alimentos.find ((el) => el.nombre_alimento === "Sabrositos Gato Adulto Mix")
console.log(buscar_producto);

let examinar_producto = lista_alimentos.some ((el) => el.nombre_alimento === "Sabrositos Perro Adulto Mix")
console.log(examinar_producto);

let filtrar_por_tipo = lista_alimentos.filter ((el) => el.tipo_mascota.includes ("Gato"))
console.log(filtrar_por_tipo);
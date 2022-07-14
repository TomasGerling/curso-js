function calcular_precio (cantidad_producto, precio_producto){
    if ( cantidad_producto >= 1){
        alert (`usted debe pagar: $${precio_producto * cantidad_producto} ¡el envio es gratis! `)
    }
    else if( cantidad_producto <= 0){
        alert ("usted selecciono una cantida erronea!")
    }

};
// function ingresar_datos(){
//     let nombre_cliente = prompt("Ingrese su nombre completo");
//     let direccion_cliente = prompt("Ingrese su direccion para el envio o si retira en el local");
//     let producto_cliente = prompt("Ingrese que alimento desea comprar");
//     let precio_producto = prompt("Ingrese el valor por KG del producto");
//     let cantidad_producto = prompt("Ingrese cuanto quiere comprar (numero)");
//     return [nombre_cliente, direccion_cliente, producto_cliente, precio_producto, cantidad_producto]
// }
// class Alimentos{
//     constructor(product_id, nombre_alimento, cantidad_producto, peso_por_bolsa, tipo_mascota, precio_bolsa, precio_kg, imagen_bolsa){

//         this.product_id = product_id;
//         this.nombre_alimento = nombre_alimento;
//         this.cantidad_producto = cantidad_producto;
//         this.peso_por_bolsa = peso_por_bolsa;
//         this.tipo_mascota = tipo_mascota
//         this.precio_bolsa = precio_bolsa
//         this.precio_kg = precio_kg
//         this.imagen_bolsa = imagen_bolsa
//     }
// }

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

console.log(lista_alimentos)

// let datos = ingresar_datos();
// for (let i = 0; i < datos.length; i++){
//     console.log(datos[i]);
// }

// calcular_precio(datos[4], datos[3])

// Metodos de busqueda y transformacion
let barato = lista_alimentos.filter(nombre_alimento => nombre_alimento.precio_bolsa <= 5000)
console.log(barato);


// let lista_productos = lista_alimentos.map(product_id => product_id.nombre_alimento)
// console.log(lista_productos);

// let buscar_producto = lista_alimentos.find ((el) => el.nombre_alimento === "Sabrositos Gato Adulto Mix")
// console.log(buscar_producto);

// let examinar_producto = lista_alimentos.some ((el) => el.nombre_alimento === "Sabrositos Perro Adulto Mix")
// console.log(examinar_producto);

// let filtrar_por_tipo = lista_alimentos.filter ((el) => el.tipo_mascota.includes ("Gato"))
// console.log(filtrar_por_tipo);

let darkMode=document.getElementById("darkMode")
let lightMode=document.getElementById("lightMode")

darkMode.addEventListener("click", function (){
    let body = document.getElementById("body")
    body.style.backgroundColor = "#141414"
    body.style.color ="cornsilk"
})

lightMode.addEventListener("click", function (){
    let body = document.getElementById("body")
    body.style.backgroundColor = "#add8e6"
    body.style.color ="black"
})

let botones_compra_KG = document.querySelectorAll(".Boton-compra-KG");
let botones_compra_Bolsa = document.querySelectorAll(".Boton-compra-Bolsa");
let carrito = [];
let carrito_storage = [];

for( let boton of botones_compra_KG){

    boton.addEventListener("click", agregar_carrito);
}
for( let boton of botones_compra_Bolsa){

    boton.addEventListener("click", agregar_carrito);
}

function agregar_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let abuelo= padre.parentNode;
    let nombre_producto = abuelo.querySelector(".nombre-carrito").textContent;
    let img = abuelo.querySelector("img").src;
    //console.log(img);
    let precio = abuelo.querySelector(".precio-KG").textContent;
    let precio_bolsa = abuelo.querySelector(".precio-Bolsa").textContent;
    //console.log(precio);
    let producto = {
        nombre: nombre_producto,
        img: img,
        precio: precio,
        cantidad:1
    };
    carrito.push(producto);

    let producto_JSON = JSON.stringify(producto);
    carrito_storage.push(producto_JSON);

    localStorage.setItem("producto" , carrito_storage);

    mostrar_carrito( producto );
}

function mostrar_carrito( producto ){

    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn-danger borrar_elemento">Borrar</buttton></td>    
    
    ` ;

    let body_tabla = document.getElementById("tbody");
    body_tabla.append( fila );



    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for(let boton of botones_borrar){

        boton.addEventListener("click" , borrar_producto);
    }
}


function borrar_producto(e){

    let hijo = e.target;
    let abuelo = hijo.parentNode.parentNode;

    abuelo.remove();
}
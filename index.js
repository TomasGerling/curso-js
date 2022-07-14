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
    nombre_alimento: "Energy Food Adulto",
    cantidad_producto: 15,
    peso_por_bolsa: 20,
    tipo_mascota: "Perro",
    precio_bolsa: 4700,
    precio_kg: 290,
    imagen_bolsa: "/img/Energy_food_adulto_perro.jpg",
  },
  {
    product_id: 2,
    nombre_alimento: "Excellent Gato Adulto",
    cantidad_producto: 1,
    peso_por_bolsa: 15,
    tipo_mascota: "Gato",
    precio_bolsa: 5500,
    precio_kg: 500,
    imagen_bolsa: "/img/Excellent_adulto_perro.jpg",
  },
  {
    product_id: 3,
    nombre_alimento: "Sieger Criadores",
    cantidad_producto: 2,
    peso_por_bolsa: 20,
    tipo_mascota: "Perro",
    precio_bolsa: 5500,
    precio_kg: 300,
    imagen_bolsa: "/img/Sieger_adulto_perro.jpg",
  },
  {
    product_id: 4,
    nombre_alimento: "Sabrositos Gato Adulto Mix",
    cantidad_producto: 3,
    peso_por_bolsa: 15,
    tipo_mascota: "Gato",
    precio_bolsa: 4200,
    precio_kg: 300,
    imagen_bolsa: "/img/Sabrositos_adulto_gato.jpg",
  },
];
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

// Metodos de busqueda y transformacion
// let barato = lista_alimentos.filter(
//   (nombre_alimento) => nombre_alimento.precio_bolsa <= 5000
// );
// console.log(barato);

// let lista_productos = lista_alimentos.map(product_id => product_id.nombre_alimento)
// console.log(lista_productos);

// let buscar_producto = lista_alimentos.find ((el) => el.nombre_alimento === "Sabrositos Gato Adulto Mix")
// console.log(buscar_producto);

// let examinar_producto = lista_alimentos.some ((el) => el.nombre_alimento === "Sabrositos Perro Adulto Mix")
// console.log(examinar_producto);

// let filtrar_por_tipo = lista_alimentos.filter ((el) => el.tipo_mascota.includes ("Gato"))
// console.log(filtrar_por_tipo);

let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");

darkMode.addEventListener("click", function () {
  let body = document.getElementById("body");
  body.style.backgroundColor = "#141414";
  body.style.color = "cornsilk";
});

lightMode.addEventListener("click", function () {
  let body = document.getElementById("body");
  body.style.backgroundColor = "#add8e6";
  body.style.color = "black";
});

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
// Aca esta mi problema
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      ".shoppingCartItemPrice"
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

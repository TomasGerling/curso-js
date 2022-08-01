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
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
  console.log(elementsTitle);
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText.trim() === itemTitle.trim()) {
      let elementQuantity = elementsTitle[i]
      let inputElement = elementQuantity.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1];
      $('.toast').toast('show');
      inputElement.value++;
      updateShoppingCartTotal();
      return;
    }
    else{

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
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Gracias por su compra, sera redirigido a una pagina para que ingrese sus datos',
    showConfirmButton: false,
    timer: 15000
  })
  updateShoppingCartTotal();
}
let registro = document.getElementById("registerButton");
registro.addEventListener("click", function () {
  console.log(  
    document.querySelector("#name").value,
    document.querySelector("#lastname").value,
    document.querySelector("#email").value,
    document.querySelector("#password").value,
    Swal.fire({
      icon: 'success',
      title: 'Gracias por registrarse en Peluditos',
      text: 'Confirme su cuenta a traves de su email'
    })
    );
    let userToObject = {
      name: document.querySelector("#name").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
};

saveOnLocalStorage(userToObject)
})

let saveOnLocalStorage = function(userToObject){
  localStorage.setItem("userInfo", JSON.stringify(userToObject));
}

let readLocalStorage = function(){
  let userInfo = localStorage.getItem("userInfo")
  let JSONToObject = JSON.parse(userInfo)
  document.querySelector("#name").value = JSONToObject[2];
  document.querySelector("#lastname").value = userInfo.lastname;
  document.querySelector("#email").value = userInfo.email;
  document.querySelector("#password").value = userInfo.password;
  console.log(JSONToObject , "test");
  
}

let weatherContainer = document.getElementById("weatherContainer")

fetch("https://api.openweathermap.org/data/2.5/weather?lat=-38.5545&lon=-58.73961&lang=en&units=metric&appid=eba5864c76bd7d0c9eea62ce04647b65")
    .then (response => response.json())
    .then (data =>{
      console.log("La temperatura minima es:" , data.main.temp_min);
      console.log("La temperatura maxima es:" , data);
      console.log("La sensación termica es:" , data.main.feels_like);
      console.log("El clima es: " , data.weather[0].description);
      weatherContainer.innerHTML = `<ul class="weatherCity">
                          <li class="table-success">
                          Clima en ${data.name}
                            <ul class="datosTemp">
                              <li class="table-danger" style="color: Black ;">
                              La temperatura maxima es ${data.main.temp_max} °C
                              </li>
                              <li class="table-info" style="color: Black ;">
                              La temperatura minima es ${data.main.temp_min} °C
                              </li>
                              <li class="table-dark">
                              La sensacion termica es ${data.main.feels_like} °C
                              </li>
                              <li class="table-dark" >
                              <span class="material-icons"> ${data.weather[0].description}</span>
                              </li>
                            </ul>
                          </li>
                        </ul>`;
    });
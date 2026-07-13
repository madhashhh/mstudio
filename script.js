let cart = [];

const buttons = document.querySelectorAll(".add");

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");


buttons.forEach((button)=>{

button.addEventListener("click", function(){

let product = button.parentElement;

let name = product.querySelector("h3").innerText;

let priceText = product.querySelector("p").innerText;

let price = Number(priceText.replace(" kr",""));

let size = product.querySelector("select").value;


cart.push({

name:name,
price:price,
size:size

});


updateCart();

});

});



function updateCart(){

cartItems.innerHTML="";

let sum = 0;


if(cart.length === 0){

cartItems.innerHTML="Kundvagnen är tom";

}



cart.forEach((item)=>{


let div = document.createElement("p");


div.innerHTML =
item.name +
"<br>Storlek: " +
item.size +
"<br>" +
item.price +
" kr";


cartItems.appendChild(div);


sum += item.price;


});


total.innerHTML =
"Totalt: " + sum + " kr";


}
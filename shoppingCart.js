let total = 0;
let data = JSON.parse(localStorage.getItem('cart'));
console.log(data)
var data_div = document.getElementById("showData");
data.forEach(function (el) {
    let product = JSON.parse(el)
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = product.name;

    let p_price = document.createElement("p");
    p_name.innerHTML = `$${product.price}`;

    let image = document.createElement("img");
    image.src = product.image;

    div.append(image, p_name, p_price);

    data_div.append(div);
    total = total + Number(product.price);
});
let subTotal = document.getElementById("s");
subTotal.append(`$${total.toFixed(2)}`);

let emtimate = document.getElementById("sc");
emtimate.append(`$${40.39}`)

let total_h1 = document.getElementById("to");
total_h1.append(`$${Number(40.39 + total).toFixed(2)}`);



let cart = []
let count = document.getElementById("count")
function addtocart(product) {
    if (localStorage.cart != undefined) {
        cart = localStorage.getItem("cart");
        cart = JSON.parse(cart);
    }

    count.innerHTML = cart.length
    console.log(cart.length)
    count.innerHTML = cart.length
    console.log(cart.length)
    cart.push(JSON.stringify(product));
    cart = JSON.stringify(cart);
    localStorage.setItem("cart", cart);
}


if (localStorage.cart != undefined) {
    cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
}
count.innerHTML = cart.length
console.log(cart.length)


function check() {
    window.location.href = "PaymentSuccess.html"
}

function redirectToHome() {
    window.location.href = "index.html";
}
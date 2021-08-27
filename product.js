const catalogues = [
    {
        name: 'Front Bumper Cover, Primed, CAPA CERTIFIED',
        price: 314.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…auto,dpr_auto,e_sharpen/images/repf010308pq_1.jpg'
    },

    {
        name: 'Bumper Cover - Front, CAPA Certified, with Left Fender',
        price: 433.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…dpr_auto,e_sharpen/images/kit1-112617-459-a_1.jpg'
    },

    {
        name: 'Bumper Cover - Front, CAPA Certified, with Right Fender',
        price: 431.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…dpr_auto,e_sharpen/images/kit1-112617-458-a_1.jpg'
    },

    {
        name: 'Hoods & Components',
        price: 574.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…dpr_auto,e_sharpen/images/kit1-112617-457-a_1.jpg'
    },

    {
        name: 'Grilles & Components',
        price: 678.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…dpr_auto,e_sharpen/images/kit1-030418-158-a_1.jpg'
    },

    {
        name: 'Door Handles, Locks & Accessories',
        price: 343.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…dpr_auto,e_sharpen/images/kit1-012818-125-a_1.jpg'
    },

    {
        name: 'Windows & Components',
        price: 367.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…auto,dpr_auto,e_sharpen/images/repf760123pq_1.jpg'
    },

    {
        name: 'Other Auto Body Replacement',
        price: 628.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…pr_auto,e_sharpen/images/set-repf010308pq-2_1.jpg'
    },
    {
        name: 'Other Auto Body Replacement',
        price: 364.99,
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jp…pr_auto,e_sharpen/images/set-repf010308pq-2_1.jpg'
    },


];


const catalogue_json = JSON.stringify(catalogues);

localStorage.setItem("cataloguesitem", catalogue_json);

let catalogue_get = localStorage.getItem("cataloguesitem");

catalogue_get = JSON.parse(catalogue_get);



function showCatalogue() {
    var data_div = document.getElementById("product-data");
    catalogue_get.forEach(function (product) {
        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerHTML = product.name;

        let p_price = document.createElement("p");
        p_name.innerHTML = `$${product.price}`;

        let image = document.createElement("img");
        image.src = product.image;

        let btn = document.createElement("button");
        btn.textContent = "Add to cart";

        btn.onclick = function () {
            addtocart(product)
        }

        div.append(image, p_name, p_price, btn);

        data_div.append(div);

    });

}
showCatalogue();

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



function redirectToHome() {
    window.location.href = "index.html";
}

function redirectToCart() {
    window.location.href = "shoppingcart.html"
}


document.addEventListener("DOMContentLoaded", getProductDetails);

function getProductDetails() {
    var url =
        "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448";
    fetch(url)
        .then((response) => response.json())
        .then((data) => setProductDetails(data.product))
        .catch((err) => console.error(err.message));
}

function setProductDetails(product) {
    var vendor = document.getElementById("vendor");
    vendor.innerHTML = product.vendor;

    var title = document.getElementById("title");
    title.innerHTML = product.title;

    var price = document.getElementById("price");
    price.innerHTML = product.price;

    var original_rate = document.getElementById("original_rate");
    original_rate.innerHTML = product.compare_at_price;

    var color_1 = document.getElementById("color_1");
    color_1.style.backgroundColor = product.options[0].values[0].Yellow;

    var color_2 = document.getElementById("color_2");
    color_2.style.backgroundColor = product.options[0].values[1].Green;

    var color_3 = document.getElementById("color_3");
    color_3.style.backgroundColor = product.options[0].values[2].Blue;

    var color_4 = document.getElementById("color_4");
    color_4.style.backgroundColor = product.options[0].values[3].Pink;

    var description = document.getElementById("description");
    description.innerHTML = product.description;

    var image1 = document.getElementById("image1");
    image1.src = product.images[0].src;

    var image1 = document.getElementById("image2");
    image2.src = product.images[0].src;

    var image1 = document.getElementById("image3");
    image3.src = product.images[0].src;

    var image1 = document.getElementById("image4");
    image4.src = product.images[0].src;

    calculateOff(product.compare_at_price.slice(1), product.price.slice(1));
}

function addToCart() {
    var comment = document.getElementById("comment");
    comment.style.display = "flex";
    comment.innerText =
        "Embrace Sideboard with Color Yellow and Size Small added to cart";
}

function calculateOff(originalRate, price) {
    var off = ((originalRate - price) / originalRate) * 100;
    off = Math.floor(off);

    document.getElementById("off").innerHTML = off + "% Off";
}

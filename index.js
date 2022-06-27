const cart = [];
var product = "";
function addToCart(product){
cart.push(product);
console.log('The product is added to cart.');
console.log('Products: ',cart);
}
function removeFromCart(product){
    const index = cart.indexOf(product);
    if (index > -1) {
    cart.splice(index, 1);
    }
    console.log('The product is removed from cart.');
    console.log('Products: ',cart);
}
    

fetch("./product.json")
.then(function(res){
    console.log(res);
    return res.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let finalOutput = "";
    for(let product of products.data){
        out = `<span>${product.name}</span>
        <hr/>`;
        for(let p of product.productList)
        out += `
        <div class="card" id="productCart">
        <div class="container">
        <h4><b>Name: ${p.name}</b></h4>
        <p>Price: ${p.price}</p>
        <button onclick='addToCart("${p.name}")'>Add to cart</button>
        <button onclick='removeFromCart("${p.name}")'>Remove to cart</button>
        </div>
        </div>
        `;
        finalOutput+=out;
        finalOutput+=`</br>`
        out=""
    }
  
    placeholder.innerHTML = finalOutput;
 });
 
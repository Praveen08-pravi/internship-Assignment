const products = [
{
name:"Laptop",
price:50000,
category:"electronics",
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},
{
name:"Headphones",
price:2000,
category:"electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
name:"T-Shirt",
price:800,
category:"clothing",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},
{
name:"Jacket",
price:2500,
category:"clothing",
image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
},
{
name:"Running Shoes",
price:3000,
category:"shoes",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
}
];
let cart = 0;

const container = document.getElementById("productContainer");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const cartCount = document.getElementById("cartCount");

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

const card = document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">₹${product.price}</p>
<button onclick="addToCart()">Add to Cart</button>
`;

container.appendChild(card);

});

}

function addToCart(){
cart++;
cartCount.textContent = cart;
}
function clearCart(){
cart = 0;
cartCount.textContent = cart;
alert("Cart cleared!");
}

search.addEventListener("input", filterProducts);
filter.addEventListener("change", filterProducts);

function filterProducts(){

let value = filter.value;
let searchValue = search.value.toLowerCase();

let filtered = products.filter(product=>{

let matchCategory = value === "all" || product.category === value;
let matchSearch = product.name.toLowerCase().includes(searchValue);

return matchCategory && matchSearch;

});

displayProducts(filtered);

}

displayProducts(products);
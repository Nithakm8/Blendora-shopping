async function getAllProducts(){
    const response=await fetch('https://dummyjson.com/products')
    console.log(response);
     const {products}=await response.json();
    localStorage.setItem('products',JSON.stringify(products)??[])
    console.log(products);
    let str=''
    products.forEach((product)=>{
     str+=`
     <div class="cart1">
    <a  href="product.html?id=${product.id}" class="product">
             <img src="${product.thumbnail}" alt="">

            <h3>${product.title}</h3> 
            
            <h3>₹${product.price}</h3>
            <h4>Stock:${product.stock}</h4> </a> 
             <button onclick="addToCart(${product.id})">Add to cart</button>
       </div>
    `
    })
    document.getElementById('products').innerHTML=str
}
function addToCart(id){
console.log("Adding to cart",id);
const products=JSON.parse(localStorage.getItem('products'))??[]
const product=products.find(p=>p.id===id)
let cart=JSON.parse(localStorage.getItem('cart'))||[];
    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
    console.log('cart updated',cart);
    
  }

getAllProducts()

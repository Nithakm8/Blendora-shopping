async function getAllProducts() {
    const response=await fetch('https://dummyjson.com/products')
    const {products}=await response.json();
    localStorage.setItem('products',JSON.stringify(products))
    let str='';
    products.forEach((product)=>{
        str+=`
         <div class="cart">
        <a href="product.html?id=${product.id}" class="product" >
        <img src="${product.thumbnail}" alt="">
        <h1>${product.title}</h1>
        <h2>₹${product.price}</h2>
        <h3>Stock:${product.stock}</h3>
        </a>
       
        <button onclick="addToCart(${product.id})">Add to cart</button>  
        </div> 
        `
     })
    document.getElementById('products').innerHTML=str
}
function addToCart(id){
    console.log("adding to cart",id);
    const products=JSON.parse(localStorage.getItem('products'))??[]
   console.log(products);
   
    const product=products.find(p=>p.id===id)
    console.log(product);
    let cart=JSON.parse(localStorage.getItem('cart1'))??[]
    cart.push(product)
    localStorage.setItem('cart1',JSON.stringify(cart))
    
}
getAllProducts()

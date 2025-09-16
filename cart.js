function loadCart(){
    let cart1=JSON.parse(localStorage.getItem('cart1'))??[]
    console.log(cart1);
    
    let cartContainer=document.getElementById('carts')
    let totalPrice=0;

     if(cart1.length===0){
        cartContainer.innerHTML='<p>Your cart is empty.</p>'
        document.getElementById('total').innerText='';
        return;
    }
    let str="";
    cart1.forEach((product,index)=>{
        totalPrice+=product.price*product.quantity;
        str+=`
        <div class="cartitem">
        <img src="${product.thumbnail}" alt="">
        <div>
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
         <p>Total:₹${product.price*product.quantity}</p>
        
        <button class="qtybtn" onclick="updateQuantity(${index},-1)">-</button>
        <input type="text" name="quantity" value="${product.quantity}">
         <button class="qtybtn" onclick="updateQuantity(${index},1)">+</button>
        
        <button class="removebtn" onclick="removeFromCart(${index})">Remove</button>
        </div>
       
        </div>

        
        `
    })
    
    cartContainer.innerHTML=str;
    document.getElementById("total").innerText="Total:₹"+totalPrice;
}
function updateQuantity(index,change){
    let cart1=JSON.parse(localStorage.getItem('cart1'))??[]
    if(cart1[index]){
        cart1[index].quantity+=change; 
    if(cart1[index].quantity<=0){
    cart1.splice(index,1)
    }
}
    localStorage.setItem('cart1',JSON.stringify(cart1));
    loadCart()
}
function removeFromCart(index){
    let cart1=JSON.parse(localStorage.getItem("cart1"))??[]
    cart1.splice(index,1)
    localStorage.setItem("cart1",JSON.stringify(cart1))
    loadCart()
}
loadCart()
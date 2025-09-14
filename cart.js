function loadCart(){
    let cart=JSON.parse(localStorage.getItem('cart1'))??[]
    console.log(cart);
    
    let cartContainer=document.getElementById('carts')
    let totalPrice=0;
    cartContainer.innerHTML=""
     if(cart.length===0){
        cartContainer.innerHTML='<p>Your cart is empty.</p>'
        document.getElementById('total').innerHTML='';
        return
    }
    
    cart.forEach((product,index)=>{
        totalPrice+=product.price;
        str+=`
        <div class="cartitem">
        <img src="${product.thumbnail}" alt="">
        `
    })
}
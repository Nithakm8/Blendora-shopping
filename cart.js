function loadCart(){
    let cart=JSON.parse(localStorage.getItem('cart'))||[];
    let cartContainer=document.getElementById('cart-items');
    let totalPrice=0;
    if(cart.length==0){
        cartContainer.innerHTML="<p>Your cart is empty.</p>";
        document.getElementById("total").innerHTML="";
        return;
    }
    let str='';
    cart.forEach((product,index)=>{
        totalPrice+=product.price;
        str+=`
            <div class="cartitem">
            <img src="${product.thumbnail}" alt="${product.title}">
            <div>
            <h3>${product.title}</h3>
            <h4>₹$ 
        `
    })
}
function getProduct(){
    const urlParams=new URLSearchParams(window.location.search)
    let id=Number(urlParams.get('id'))
    let products=JSON.parse(localStorage.getItem('products'))
    console.log(products);
    
    let product=products.find((prod)=>prod.id===id)
    document.getElementById('product').innerHTML=`
    <div class="main">
    <div class="image1">
    <img src="${product.thumbnail}" alt="">
    </div>
    <div class="details">
    <h2>${product.title}</h2>
     <p><i>${product.description}</p>
    <p>${product.availabilityStatus}</p>
    <p>Rating:${product.rating}</p>
     <p>₹${product.price}</p>
    <p>Brand:${product.brand}</p>
   <p>Category:${product.category}</p>
   <p>Discount Percentage:${product.discountPercentage}</p>
    <p>Stock:${product.stock}</p>
   <p>Return Policy:${product.returnPolicy}</i></p>
   </div>
  </div>
    <div id="images"></div>
     
    `
    product.images.forEach((image)=>{
        document.getElementById('images').innerHTML+=`<img src="${image}" alt="">`
    })
}
getProduct()
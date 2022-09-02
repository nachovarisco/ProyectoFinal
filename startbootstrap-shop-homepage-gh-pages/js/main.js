
//API

  fetch('https://api.mercadolibre.com/sites/MLA/search?q=sillas')
    .then((response) => response.json())
    .then(informacion => {
     
      informacion.results.forEach((producto) => {
        console.log(producto)
       
      const idButton = `${producto.id}`;
      console.log(idButton);
      document.getElementById ("cards-index").innerHTML += ` <div class="card x-4 px-lg-5 my-5 col-4  text-center container-fluid">
      <img src= "${producto.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${producto.title}</h5>
        <p class="card-text"> -$${producto.price}</p>
        <button id =${idButton}  data-id =" ${producto.id}"   > agregar al carrito </button>
      </div>
    </div>`;

      })



const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador , producto) => acumulador + producto.price, 0);
document.getElementById("total-cart").innerHTML = carrito.length + "$ " + total;


//start carrito pop up

carrito.forEach((producto)=> {
  document.getElementById("carritoPopUP").innerHTML += `
<div class="container">
<div class="row">
<div class="col">
  nombre 
</div>
<div class="col">
  precio
</div>
<div class="col">
imagen
</div>
</div>
<div class="row">
<div class="col">
 ${producto.title}
</div>
<div class="col">
${producto.price}
</div>
<div class="col">
<img src= "${producto.thumbnail}" class="card-img-top" alt="...">
</div>

</div>
</div>
`; })


//start carrito aside


carrito.forEach((producto)=> {
  document.getElementById("carritoLista").innerHTML += `
<div class="container">
<div class="row">
<div class="col">
  nombre 
</div>
<div class="col">
  precio
</div>
<div class="col">
imagen
</div>
</div>
<div class="row">
<div class="col">
 ${producto.title}
</div>
<div class="col">
${producto.price}
</div>
<div class="col">
<img src= "${producto.thumbnail}" class="card-img-top" alt="...">
</div>

</div>
</div>
`; })








// agregar al carrito


informacion.results.forEach((producto) => {
    const idButton = `${producto.id}`
    document.getElementById(idButton).addEventListener("click" , (event) => {
   carrito.push(producto);
   localStorage.setItem("carrito", JSON.stringify(carrito));
   const total = carrito.reduce((acumulador , producto) => acumulador + producto.price, 0 );
   document.getElementById("total-cart").innerHTML = `${carrito.length}  -$${total}`;


//carrito pop up





   JSON.parse(localStorage.getItem("carrito"));
   document.getElementById("carritoPopUP").innerHTML = ""
   carrito.forEach((producto)=> {document.getElementById("carritoPopUP").innerHTML += `
   <div class="container">
   <div class="row">
   <div class="col">
     nombre 
   </div>
   <div class="col">
     precio
   </div>
   <div class="col">
   imagen
   </div>
   </div>
   <div class="row">
   <div class="col">
    ${producto.title}
   </div>
   <div class="col">
   ${producto.price}
   </div>
   <div class="col">
   <img src= "${producto.thumbnail}" class="card-img-top" alt="...">
   </div>
   
   </div>
   </div>
   `; })


   //carrito aside



   
   JSON.parse(localStorage.getItem("carrito"));
   document.getElementById("carritoLista").innerHTML = ""
   carrito.forEach((producto)=> {document.getElementById("carritoLista").innerHTML += `
   <div class="container">
   <div class="row">
   <div class="col">
     nombre 
   </div>
   <div class="col">
     precio
   </div>
   <div class="col">
   imagen
   </div>
   </div>
   <div class="row">
   <div class="col">
    ${producto.title}
   </div>
   <div class="col">
   ${producto.price}
   </div>
   <div class="col">
   <img src= "${producto.thumbnail}" class="card-img-top" alt="...">
   </div>
   
   </div>
   </div>
   `; })
  })   
 })
})


     
 


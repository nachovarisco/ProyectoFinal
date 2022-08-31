






swal("Hello world!");



const carrito = []



const productos = [
    {id: 1,  
    name:"zapa nike" ,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-zapatillas-xCxt0q.png",
    price: 900 ,},


    {id: 2,  
        name:"zapa adadis" ,
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8da8ca5de56c433ba559ad7800e4a4d1_9366/Zapatillas_Courtflash_para_Tenis_Negro_GW2988_01_standard.jpg",
        price: 900 ,}, 



   {id: 3,  
    name:"zapa topito",
    img: "https://ferreira.vteximg.com.br/arquivos/ids/226901-588-588/to_83301.jpg?v=636615700832270000",
    price: 900 ,},
];




let cards ="";


// col-4 d-flex text-center container-fluid

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById ("cards-index").innerHTML += ` <div class="card x-4 px-lg-5 my-5 col-4 d-flex text-center container-fluid">
    <img src= "${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${producto.name}</h5>
      <p class="card-text"> ${producto.price}</p>
      <button id =${idButton}  data-id =" ${producto.id}" > agregar al carrito </button>
    </div>
  </div>` ;






})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener("click" , (event) => {
   carrito.push(producto);
   localStorage.setItem("carrito", JSON.parse(carrito))

   const total = carrito.reduce ((acumulador , producto) => acumulador + producto.price, 0 );
   document.getElementById("total-cart").innerHTML = `${carrito.length + Number(totalCarrito)} -$ ${total}`;
  alert( carrito);
  

      
        
      })
});



card.price


card.title


card.thumbnail // img
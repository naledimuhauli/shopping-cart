// when user clicks cart icon, show the shopping cart

let cart = document.querySelector('#cart');

function displayCart(){
     let body = document.querySelector('body');
    body.classList.toggle('showCart')
}
    cart.addEventListener('click', displayCart());

    
    // add the item into the cart
   let cartItems = [
    {
        productId: '1',
        name: 'Scented Bliss',
        image: 'images/perfume-9.webp',
        price: 1200,
        quantity: 1 
    },{
        productId : '2',
        name: 'Fragrance Fusion',
        image: 'images/perfume-2.jfif',
        price: 1000,
        quantity: 1
    },{
        productId: '3',
        name: 'Aromaavenue',
        image: 'images/perfume-3.jfif',
        price: 1500,
        quantity: 1
    },{
        productId: '4',
        name: 'Fragrance Finesse',
        image: 'images/perfume-10.jfif',
        price: '1700',
        quantity: 1
    },{
        productId: '5',
        name: 'Noir Absolu',
        image: 'images/perfume-11.jfif',
        price: 1200,
        quantity: 1
    },{
        productId: '6',
        name: 'Enchante`',
        image: 'images/perfume-12.jfif',
        price: 2100,
        quantity: 1
    }
   ];

    let addButton = document.querySelectorAll('.add-btn');

    addButton.forEach(button => {
        button.addEventListener('click', () => {
         let productId = button.dataset.id;
        
        //  check if the product is in the cart
         let matchingItem;

          cartItems.forEach((item) => {
             if(productId === item.productId) {
                matchingItem = item;
             }
          });
          //if it is, increase the mathchingitems by 1

          if(matchingItem){
             matchingItem.quantity += 1;
          } else{
                // If not, add the new product to the cart
             cartItems.push({
                productId: productId,
                quantity: 1
             });

          };

          //increase the cart number on the cart icon

        //   let cartQuantity = 0;

        //   cartItems.forEach((item)=> {
        //     cartQuantity += item.quantity;
        //   } );
        //   document.querySelector('.number')
        //   .innerHTML = cartQuantity;

        //      console.log(cartItems);
        //      console.log(cartQuantity);

     handleCart();
     handleShoppingCart();
        });
    });

     let cartSummaryHtml = '';
    function handleShoppingCart(){

   

    cartItems.forEach((cartItem) =>{

         cartSummaryHtml += `
         <div class="items">
    <div class="image">
        <img src="${cartItem.image}" alt="${cartItem.name}">
    </div>
    <div class="name">
        NAME: ${cartItem.name}
    </div>
    <div class="price">
        PRICE: ${cartItem.price}
        <br>
        Quantity:${cartItem.quantity} 
    </div> `;
        });
            
   document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;
};
    console.log(cartSummaryHtml);


function handleCart(){
    let numberInCart = document.querySelector('.number');
    let cartNumber = Number(numberInCart.innerHTML);

    cartNumber += 1;
    numberInCart.innerHTML = cartNumber;
}
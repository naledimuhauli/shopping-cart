// when user clicks cart icon, show the shopping cart

let cart = document.querySelector('#cart');

function displayCart(){
     let body = document.querySelector('body');
    body.classList.toggle('showCart')
}
    cart.addEventListener('click', displayCart());

    
    // add the item into the cart
   let cartItems = [];

    let addButton = document.querySelectorAll('.add-btn');

    addButton.forEach(button => {
        button.addEventListener('click', () => {
         let productId = button.dataset.id;

         //check if the product is in the cart
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
             cartItems.push({
                productId: productId,
                quantity: 1
             });

          };

          //increase the cart number on the cart icon

          let cartQuantity = 0;

          cartItems.forEach((item)=> {
            cartQuantity += item.quantity;
          } );
          document.querySelector('.number')
          .innerHTML = cartQuantity;

             console.log(cartItems);
             console.log(cartQuantity);
            // handleCart();
        });
    });




// function handleCart(){
//     let numberInCart = document.querySelector('.number');
//     let cartNumber = Number(numberInCart.innerHTML);

//     cartNumber += 1;
//     numberInCart.innerHTML = cartNumber;
// }
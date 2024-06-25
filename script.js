//select html elemnts using DOM
let body = document.querySelector('body');
let openCart = document.querySelector('.cart-icon');
let closeCart = document.querySelector('.closeCart');

//open cart 
openCart.addEventListener('click', () =>{
    body.classList.add('active');
});
//close cart 
closeCart.addEventListener('click', () =>{
    body.classList.remove('active');
});

 //save data in Js
let productList = [{
    id: '1',
    name: 'Scented Bliss',
    image: 'images/perfume-9.webp',
    price: 1200 
},{
    id : '2',
    name: 'Fragrance Fusion',
    image: 'images/perfume-2.jfif',
    price: 1000
},{
    id: '3',
    name: 'Aromaavenue',
    image: 'images/perfume-3.jfif',
    price: 1500
},{
    id: '4',
    name: 'Fragrance Finesse',
    image: 'images/perfume-10.jfif',
    price: 1700
},{
    id: '5',
    name: 'Noir Absolu',
    image: 'images/perfume-11.jfif',
    price: 1200
},{
    id: '6',
    name: 'Enchante`',
    image: 'images/perfume-12.jfif',
    price: 2100
}];

//selecting more html elemnts using the dom
let quantity = document.querySelector('.number');
let list = document.querySelector('.list');
let totalNum = document.querySelector('.total');
let cartList = document.querySelector('.cartList');

//make it an empty string so you can add the items later
let listProduct = [];

//generate HTML
function itemList () {
    productList.forEach((value, index) => {
        let newItem = document.createElement('div');
        newItem.classList.add('object');
        newItem.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">R${value.price.toLocaleString()}</div>
            <button onclick="addingToCart(${index})">Add To Cart</button>
        `;
        list.appendChild(newItem);
    });
}

itemList();

//increase cart quantity
function addingToCart (index) {
    if (listProduct[index] == null) {
        listProduct[index] = JSON.parse(JSON.stringify(productList[index]));//saving into a js object
        listProduct[index].quantity = 1;
    } else {
        listProduct[index].quantity += 1;
        listProduct[index].price = listProduct[index].quantity * productList[index].price;
    }
    reload();
};

//add item into cart

function reload () {
    let count = 0;
    let totalPrice = 0;

    cartList.innerHTML = '';

    listProduct.forEach((value, index) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;

            let newItem = document.createElement('li');
            newItem.innerHTML = `
                <div><img src="${value.image}"></div>
                <div class="cartTitle">${value.name}</div>
                <div class="cartPrice">R${value.price.toLocaleString()}</div>
                <div>
                    <button class="cartButton" onClick="changeQuantity(${index}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="cartButton" onClick="changeQuantity(${index}, ${value.quantity + 1})">+</button>
                </div>
            `;
            cartList.appendChild(newItem);
        }
    });

    totalNum.innerText = `R${totalPrice.toLocaleString()}`;
    quantity.innerText = count;

    // Close cart if empty and set quantity to 0
    if (count === 0) {
        body.classList.remove('active');
        quantity.innerText = '0';
    }
};

function changeQuantity (index, newQuantity) {
    if (newQuantity <= 0) {
        delete listProduct[index];
    } else {
        listProduct[index].quantity = newQuantity;
        listProduct[index].price = newQuantity * productList[index].price;
    }
    //reload the cart again
    reload();
};



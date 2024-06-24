const openShopping = document.querySelector('.cart-icon');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.number');

openShopping.addEventListener('click', () =>{
    body.classList.add('active');
});

closeShopping.addEventListener('click', () =>{
    body.classList.remove('active');
});

let products = [{
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

let listCards = [];

const initApp = () =>{
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

const addToCart = (key) =>{
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1;
        listCards[key].price = listCards[key].quantity * products[key].price;
    }
    reloadCart();
};

const reloadCart = () =>{
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>
                <div>
                    <button style="background-color: #560bad" class="cardButton" onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color: #560bad" class="cardButton" onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    // Close cart if empty and set quantity to 0
    if (count === 0) {
        body.classList.remove('active');
        quantity.innerText = '0';
    }
};

const changeQuantity = (key, newQuantity) => {
    if (newQuantity <= 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
        listCards[key].price = newQuantity * products[key].price;
    }
    reloadCart();
};



//save the product information in an array
 /*
    const products = [{
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
        price: '1700'
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
    }
    ];

    // Generate the html
    let productsHtml = '';

     products.forEach((product) => {
          productsHtml += `
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col-4 product">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-body">
                <img src="${product.image}" alt="" class="image">
                <h4 class="my-0 fw-normal">${product.name}</h4>
                 <h1 class="card-title pricing-card-title">${product.price}</h1>
                <button type="button" class="w-100 btn btn-lg btn-dark add-btn" data-product-name="${product.id}">Add to cart</button>
              </div>
            </div>
          </div>
          </div>
          `
     });

     console.log(document.querySelector('.js-body')
     .innerHTML = productsHtml) */
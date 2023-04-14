function datalayerTest() {
console.log("addtocartdatalayer() function is being called");
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'product': 'shirt',
    'event': 'add_to_cart',
    'ecommerce': {
        'currencyCode': 'EUR',
        'add': {                                // 'add' actionFieldObject measures.
            'products': [{                        //  adding a product to a shopping cart.
            'name': 'Triblend Android T-Shirt',
            'id': '12345',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray',
            'quantity': 1
            }]
        }
        }
    });
    };


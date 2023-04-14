function purchasedatalayer() {
    console.log("purchasedatalayer() function is being called");
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'purchase'
    'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'Online Store',
        'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
        'tax':'4.90',
        'shipping': '5.99',
        'coupon': 'SUMMER_SALE'
      },
      'products': [{                            // List of productFieldObjects.
        'name': 'Triblend Android T-Shirt',     // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1,
        'coupon': ''                            // Optional fields may be omitted or set to empty string.
       }]
    }
  }
})};
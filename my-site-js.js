(function datalayerTest() {
    var button = document.getElementById("datalayer-test");
    button.addEventListener("click", function() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'product': 'shirt',
            'event': 'add_to_cart'
        });
    });
})();
    
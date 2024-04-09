//Traversal

//Climb up  the DOM until element is found
Element.closest(selector)
// Climb down until element is found
Element.querySelector(selector)

// Ex. 
var someVar = document.querySelector("someSelector")

var buyCallback = function(event) {
    event.preventDefault(); 
    var header = event.target.closest('div.element-cta__content').querySelector('h3'); 
    window.dataLayer.push({
        event: 'click_buy_button', 
        buyHeader: header.textContent
    })
}; 
//looks for the closest h3 to the indicated selector

buyButton1.addEventListener('click', buyCallback); 
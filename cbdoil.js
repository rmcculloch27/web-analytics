
//variable for regular price
function reglarPrice () {
  var a = document.querySelector('#quickViewModal div.price__container span.value[content]');
  var b = a.getAttribute('content'); 
  return b; 
  }

function subscriptionPrice() {
  var c = document.querySelector('#quickViewModal div.autoship-radio span.value.price'); 
  var d = c.getAttribute('content'); 
  return d; 
} 

//variable for item name
function itemName(){
  var a = document.getElementsByTagName('h1');
  var b = a[0].innerText;
  return b;
};

//Event listener for Add to Cart events
function l() {
var button = document.querySelector('button.add-to-cart'); 
var text = button.textContent; 

button.addEventListener('click', function(event) {
    event.preventDefault(); //the default action for a click is a redirect; we don't want this to happen while testing
    console.log(event.type + event + 'happened on the product page!');
});
};
    //event.type is a method in the metadata
    // window.dataLayer = window.dataLayer || []; 
    // window.dataLayer.push({
    //     event: 'click_on_home', 
    //     eventMetadata: event
    });
// });

const input = document.querySelector("input");
const log = document.getElementById("email_67954628");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}



//Get Current Elements in the cart
function starWars() {
var vader = window.localStorage.asCartContents; 


//This turns it into an array
var luke = vader.split('{"product_name":')
//we don't want [0]
luke.shift();
return luke;};

//loop over the array and return cart contents as individual variables

// add-to-cart btn btn-primary value for elementClass will fire for both subscription 
// and regular add to carts. 
    //test creating a conditional statement. Check for the clickText of the button to contain
    // 're.match('.*(& SUBSCRIBE))
    // check SIMO and dL.push tomorrow, I think this is part of what I don't understand about
    // dataLayer.push


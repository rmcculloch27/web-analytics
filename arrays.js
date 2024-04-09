//array methods - imagine using window.dataLayer array

//unshift()

window.dataLayer.unshift('first!');


//shift

var firstItem = window.dataLayer.shift(); // stores the first item in a new variable &
    // removes it from the dataLayer

//pop()
var lastItem = window.dataLayer.pop(); //holds the last item in the array and it won't 
    //be in window.dataLayer.pop();

////THESE ARE THE MONEY SHOTS!!

//filter()
var filteredArray = window.dataLayer.filter(); 

var filteredArray = window.dataLayer.filter(function(item) {
    return item.event; // looks for the event key in the array and creates a new array from it
  });

//map()
var mappedArray = window.dataLayer.map(function(item) {
    return item.event ? item.event : 'No event found!';
  });

//chain filter() and map() together
var finalArray = window.dataLayer
  .filter(function(item) { return item.event; })
  .map(function(item) { return item.event; });


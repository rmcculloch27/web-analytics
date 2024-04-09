document.querySelector(); //returns the first match and the element itself

var a = document.querySelectorAll('#primary-menu > li > a'); //returns a list of all of the elements

//for loop over the array - this should be the one we go to

for(var i = 0; i < menuItems.length; i++) {
    console.log(menuItems[i].textContent);
}


// while loop - run as long as someExpression is truthy
var i = 0; 
while (menuItems[i]) {
    console.log(menuItems[i].textContent);
    i++;
}

// do while - even if there's nothing in menuItems (if it was an empty array); it would still
//run once
do {
    console.log(menuItems[i].textContent);
    i++;
} while (menuItems[i]);

//handy for browser JS - forEach VERY HANDY
menuItems.forEach(function(el) {
    console.log(el.textContent); 
}); //don't have to set an initial condition

// Also handy for objects

var user = {
    name: 'Simo Ahava', 
    occupation: 'Entrepreneur', 
    favoriteFood: 'Pasta'
};

for (var prop in user) {//goes through each property of the object
    console.log('currently iterating over property' + prop + ' whose value is ' + user[prop]);
}


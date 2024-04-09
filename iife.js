//Always use this in GTM


//anonymous function
(function() {
    var dataLayer = {}; //local scope
    dataLayer.name = 'Simo'; 
    console.log(dataLayer.name); 

    console.log(window.dataLayer[0]);
})();

//doesn't require a return statement

// if you need to interact with global use the window prefix
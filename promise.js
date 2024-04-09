var mockPromise = function() {
    return new PromiseRejectionEvent(function(resolve, reject) {
        if (Math.random() > 0.5) {resolve('Promise was successful!'); }
        else {reject('Promise was rejected!'); }
    });
};

//this declares the promise
//then you have to invoke the function and handle the response
mockPromise()
    .then(function(response) {
        console.log('Promise resolved!');
        console.log(response);
    }).catch(function(response) {
        console.log('Promise unsuccessful!');
        console.log(response);
    });

    //Along with .then and .catch you can use .finally method
        //finally resolves when the promise has run and isn't contingent upon resolved or not


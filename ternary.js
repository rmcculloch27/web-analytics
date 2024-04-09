//how to turn an if-block into ternary

(function() {
    var userActive = true; 

    if (userActive) {
        console.log('User is active!');
    } else {
        console.log('User is not active!')

    }
})();

//Now ternary version

//someExpression ? runIfTruthy : runIfFalsy; 

(function() {
    var userActive = true; 

    userActive ? console.log('User is active') : console.log('User is not active!');
    
})();
// this is most often used in variable assignment and in return statements
(function() {
    var userActive = false;

    var userStatus = userActive ? 'Active' : 'Not active';  
    
})();

//return statement

var testString = function(str) {
    if (typeof str === 'string') {
        return 'Yes!'; 
    } else {
        return 'No!';
    }
};

// return statement with ternary
var testString = function(str) {
    return (typeof str === 'string' ? 'Yes' : 'No');
};

var adminStatus = function(userName) {
    return (userName === 'simoahava' ? true : false);
}; 
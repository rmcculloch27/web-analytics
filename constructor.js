var car = {
    color: 'red', 
    type: 'SUV'
};

var Car = function(color, type) {
    this.color = color; 
    this.type = type;
};

var myCar = new Car('red', 'sedan');

var yourCar = new Car('green', 'jeep');

Car.prototype.getColor = function() {
    return 'Color of this car is: ' + this.color; 
};

yourCar.getColor()
myCar.getColor(); 

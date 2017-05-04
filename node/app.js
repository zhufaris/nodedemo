// function placeOrder(orderNumber) {
//     console.log('Customer order', orderNumber);
//     cookAndDelieverFood(function () {
//         console.log("Delevered food orders:", orderNumber);
//     });
// }

// function cookAndDelieverFood(callback) {
//     setTimeout(callback, 5000);
// }

// placeOrder(1);
// placeOrder(2);
// placeOrder(3);
// placeOrder(4);
// placeOrder(5);


// console.log(19=="19");
// console.log(19==="19");

// var Bucky = {
//     printFirstName: function () {
//         console.log("my name is Bucky");
//         console.log(this === Bucky);
//     }
// };

// Bucky.printFirstName();

// function dosomething() {
//     console.log("\ndo something!");
//     console.log(this === global);
// }

// dosomething();

// function User() {
//     this.name = "";
//     this.life = 100;
//     this.giveLife = function (targetPlayer) {
//         targetPlayer.life += 1;
//         console.log(this.name + " five 1 life to " + targetPlayer.name);
//     }
// };

// var Bucky = new User();
// var Wendy = new User();

// Bucky.name = "Bucky";
// Wendy.name = "Wendy";

// Bucky.giveLife(Wendy);

// console.log("Bucky " + Bucky.life);
// console.log("Wendy " + Wendy.life);

// User.prototype.uppercut = function uppercut(targetPlayer){
//     targetPlayer.life -= 3;
//     console.log(this.name + " just uppercut " + targetPlayer.name);
// };

// Wendy.uppercut(Bucky);
// console.log("Bucky " + Bucky.life);
// console.log("Wendy " + Wendy.life);

// User.prototype.magic = 40;

// console.log("Bucky " + Bucky.magic);
// console.log("Wendy " + Wendy.magic);


// require('./bucky');

// var fs = require('fs');

// fs.writeFileSync("sample.txt", "this is a test file.");
// console.log(fs.readFileSync("sample.txt").toString());

// var path = require('path');

// var website = 'https://www.youtube.com/watch?v=7hmtLvakb3I';

// console.log(path.normalize(website));

// console.log(path.parse(website));

// var events = require('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// }

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var faris = new Person('faris');

// var people = [james, mary, faris];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name);
//     });
// });

// james.emit('speak', 'hey dudes');

var fs = require('fs');

console.log('hello');

fs.readFile('sample.txt', function (err, buf) {
    console.log(buf.toString());
});
console.log('hello');
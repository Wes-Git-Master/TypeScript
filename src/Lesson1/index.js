// ***   typing of variables   *** //
var greeting = 'Hello';
console.log(greeting);
var greeting2 = 10;
console.log(greeting2);
var greeting3 = true;
console.log(greeting3);
var greeting4 = false;
console.log(greeting4);
// ***   typing of array  *** //
var funcTyping = function (names, number, status) {
    console.log(names, number, status);
    return;
};
funcTyping(['name', 'name'], 1, true);
var user = { name: 'max', age: 15, status: false, house: 5, data: ['asd', 'qwe', 'zxc'] };
var user2 = { name: 'petya', age: 20, status: true, data: [3, 2, 1] };
var getName = function (data) {
    return data.name;
};
var getAge = function (data) {
    return data.age;
};
console.log(getName(user));
console.log(getAge(user2));
// Partial //
var user3 = { name: 'max' };
var user4 = { data: ['asd', 'qwe', 'zxc'] };
console.log(user3);
console.log(user4);
// ***   typing of class   *** //
// ***   access modifiers   *** //
// ***   getters and setters   *** //
var User = /** @class */ (function () {
    function User(_name, age, status) {
        this._name = _name;
        this.age = age;
        this.status = status;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user5 = new User('max', 15, true);
console.log(user5);
user5.name = 'Ivan';
console.log(user5.name);
// const user6:User = {name:'Anastasiya',age:25,status:false}

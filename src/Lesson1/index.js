// *  typing of variables  * //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var greeting = 'Hello';
console.log(greeting);
var greeting2 = 10;
console.log(greeting2);
var greeting3 = true;
console.log(greeting3);
var greeting4 = false;
console.log(greeting4);
// *  typing of array  * //
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
// *  Partial  * //
var user3 = { name: 'max' };
var user4 = { data: ['asd', 'qwe', 'zxc'] };
console.log(user3);
console.log(user4);
// *  typing of class  * //
// *  access modifiers  * //
// *  getters and setters  * //
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
// *  abstract classes and abstract methods  * //
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.area = function () {
        return this.b * this.b / 2 * this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}(Shape));
var shapes = [
    new Triangle(2, 5, 10),
    new Rectangle(2, 60),
    new Triangle(10, 20, 30)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log('p = ' + shape.perimeter());
    console.log('a = ' + shape.area());
}
// *  interfaces / implements * //
var Shape2 = /** @class */ (function () {
    function Shape2() {
    }
    return Shape2;
}());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle2.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    Rectangle2.prototype.area = function () {
        return 0;
    };
    Rectangle2.prototype.greeting = function () {
        console.log('hello Rectangle2');
    };
    return Rectangle2;
}());
var Triangle2 = /** @class */ (function () {
    function Triangle2(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle2.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    Triangle2.prototype.area = function () {
        return 0;
    };
    Triangle2.prototype.greeting = function () {
        console.log('hello Triangle2');
    };
    return Triangle2;
}());
var shapes2 = [
    new Triangle2(2, 5, 10),
    new Rectangle2(3, 60),
    new Triangle2(10, 20, 30)
];
for (var _a = 0, shapes2_1 = shapes2; _a < shapes2_1.length; _a++) {
    var shape = shapes2_1[_a];
    console.log('p = ' + shape.perimeter());
    console.log('a = ' + shape.area());
    shape.greeting();
}

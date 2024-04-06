var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ***  static methods  *** //
var UserService0 = /** @class */ (function () {
    function UserService0() {
    }
    UserService0.greeting = function () {
        console.log('hello');
    };
    return UserService0;
}());
UserService0.greeting();
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService._getAll = function () {
        return JSON.parse(localStorage.getItem(this._userKey)) || [];
    };
    UserService.create = function (data) {
        var users = this._getAll();
        var id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push(__assign({ id: id }, data));
        this._setToStorage(users);
    };
    UserService.showHtml = function () {
        var _this = this;
        var userContainer = document.querySelector('#userContainer');
        userContainer.innerHTML = '';
        var users = this._getAll();
        var usersHtmlContent = users.map(function (user) {
            var itemDiv = document.createElement('div');
            var button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = function () {
                _this._deleteById(user.id);
            };
            itemDiv.innerText = "".concat(user.id, " -- ").concat(user.name, " -- ").concat(user.age);
            itemDiv.appendChild(button);
            return itemDiv;
        });
        if (usersHtmlContent.length) {
            userContainer.append.apply(userContainer, usersHtmlContent);
        }
        else {
            userContainer.innerText = 'Users not exists';
        }
    };
    UserService._setToStorage = function (data) {
        localStorage.setItem(this._userKey, JSON.stringify(data));
        this.showHtml();
    };
    UserService._deleteById = function (id) {
        var users = this._getAll();
        var index = users.findIndex(function (user) { return user.id === id; });
        users.splice(index, 1);
        this._setToStorage(users);
    };
    UserService._userKey = 'users';
    return UserService;
}());
UserService.showHtml();
var form = document.forms['userForm'];
form.onsubmit = function (e) {
    e.preventDefault();
    var _a = form, nameInput = _a.name, ageInput = _a.age;
    UserService.create({ name: nameInput.value, age: +ageInput.value });
    form.reset();
};

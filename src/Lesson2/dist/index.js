class UserService0 {
    static greeting() {
        console.log('hello');
    }
}
UserService0.greeting();
class UserService {
    static getAll() {
        return JSON.parse(localStorage.getItem(this._userKey)) || [
            { id: 1, name: 'Max', age: 5 }
        ];
    }
    static create(data) {
        const users = this.getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push({ id, ...data });
        this.setToStorage(users);
    }
    static showHtml() {
        const userContainer = document.querySelector('#userContainer');
        const users = this.getAll();
        const usersHtmlContent = users.map(user => {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'delete';
            itemDiv.innerText = `${user.id} -- ${user.name} -- ${user.age}`;
            itemDiv.appendChild(button);
            return itemDiv;
        });
        if (usersHtmlContent.length) {
            userContainer.append(...usersHtmlContent);
        }
        else {
            userContainer.innerText = 'Users not exists';
        }
    }
    static setToStorage(data) {
        localStorage.setItem(this._userKey, JSON.stringify(data));
    }
}
UserService._userKey = 'users';
UserService.showHtml();
const form = document.forms['userForm'];
form.onsubmit = (e) => {
    e.preventDefault();
    const { name: nameInput, age: ageInput } = form;
    UserService.create({ name: nameInput.value, age: ageInput.value });
};
//# sourceMappingURL=index.js.map
class UserService0 {
    static greeting() {
        console.log('hello');
    }
}
UserService0.greeting();
class UserService {
    static getAll() {
        return JSON.parse(localStorage.getItem(this._userKey)) || [];
    }
    static create(data) {
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
}
UserService._userKey = 'users';
UserService.showHtml();
//# sourceMappingURL=index.js.map
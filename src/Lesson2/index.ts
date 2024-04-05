// ***  static methods  *** //
class UserService0 {
    static greeting(): void {
        console.log('hello')
    }
}

UserService0.greeting()
// ************************ //

interface IUser{
    id:number;
    name:string;
    age:string;
}

class UserService {
    private static readonly _userKey = 'users'
    private static getAll():IUser[]{
        return JSON.parse(localStorage.getItem(this._userKey)) || []
    }
    static create(data:IUser):void{

    }
    static showHtml():void{
        const userContainer = document.querySelector('#userContainer') as HTMLDivElement;
        const users = this.getAll();

        const usersHtmlContent = users.map(user=>{
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'delete'
            itemDiv.innerText = `${user.id} -- ${user.name} -- ${user.age}`
            itemDiv.appendChild(button)
            return itemDiv
        });

        if (usersHtmlContent.length){
            userContainer.append(...usersHtmlContent)
        }else {
            userContainer.innerText = 'Users not exists'
        }
    }
}
UserService.showHtml()
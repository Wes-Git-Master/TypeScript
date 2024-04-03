// *  typing of variables  * //

const greeting: string = 'Hello'
console.log(greeting)
const greeting2: number = 10
console.log(greeting2)
const greeting3: boolean = true
console.log(greeting3)
const greeting4: boolean = false
console.log(greeting4)

// *  typing of array  * //

const funcTyping = (names: string[], number: number, status: boolean): number => {
    console.log(names, number, status)
    return
}
funcTyping(['name', 'name'], 1, true)

// *  interfaces  * //

interface IUser<T> {
    name: string,
    age: number,
    status: boolean,
    house?: number,
    data: T
}

const user: IUser<string[]> = {name: 'max', age: 15, status: false, house: 5, data: ['asd', 'qwe', 'zxc']}
const user2: IUser<number[]> = {name: 'petya', age: 20, status: true, data: [3, 2, 1]}
const getName = (data: IUser<string[]>): string => {
    return data.name
}
const getAge = (data: IUser<number[]>): number => {
    return data.age
}
console.log(getName(user));
console.log(getAge(user2))

// *  Partial  * //

const user3: Partial<IUser<boolean>> = {name: 'max'}
const user4: Partial<IUser<any>> = {data: ['asd', 'qwe', 'zxc']}
console.log(user3)
console.log(user4);

// *  typing of class  * //
// *  access modifiers  * //
// *  getters and setters  * //

class User {
    constructor(private _name: string, public age: number, protected status: boolean) {
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const user5 = new User('max', 15, true);
console.log(user5)
user5.name = 'Ivan'
console.log(user5.name)

// *  abstract classes and abstract methods  * //





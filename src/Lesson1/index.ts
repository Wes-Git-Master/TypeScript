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

abstract class Shape {
    abstract perimeter(): number

    abstract area(): number
}

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }

}

class Triangle extends Shape {
    constructor(private a: number, private b: number, private c: number) {
        super();
    }

    area(): number {
        return this.b * this.b / 2 * this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

const shapes: Shape[] = [
    new Triangle(2, 5, 10),
    new Rectangle(2, 60),
    new Triangle(10, 20, 30)
]

for (let shape of shapes) {
    console.log('p = ' + shape.perimeter());
    console.log('a = ' + shape.area());

}

// *  interfaces / implements * //


abstract class Shape2 {
    abstract perimeter(): number
}

interface ITools {
    area: () => number
    perimeter: () => number
    greeting: () => void
}


class Rectangle2 implements ITools {
    constructor(private a: number, private b: number) {

    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }

    area(): number {
        return 0;
    }

    greeting(): void {
        console.log('hello Rectangle2')
    }

}

class Triangle2 implements ITools {
    constructor(private a: number, private b: number, private c: number) {

    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }

    area(): number {
        return 0;
    }

    greeting(): void {
        console.log('hello Triangle2')
    }


}

const shapes2: ITools[] = [
    new Triangle2(2, 5, 10),
    new Rectangle2(3, 60),
    new Triangle2(10, 20, 30)
]

for (let shape of shapes2) {
    console.log('p = ' + shape.perimeter());
    console.log('a = ' + shape.area());
    shape.greeting();
}

// *  embeddedness * //

interface IAddress {
    city: string,
    house: number
}

interface IUser2 {
    addresses: IAddress[]
    name: 'Max'
}
interface IUser2{
    addresses:{
        city:string,
        house:number
    }[],
    name:'Max'
}

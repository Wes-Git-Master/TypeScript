// // const greeting: string = 1
// //
// // console.log(greeting);
//
// // const asd = (names: number[], ddd: number, hhh: boolean): number => {
// //     console.log(names, ddd, hhh);
// //     return ''
// // }
// //
// // asd(['Masha', 'Dasha', 'Karina'], 2, true)
// //
// // asd(['Masha', 'Dasha', 'Karina'], 2, true)
// //
// // asd(['Masha', 'Dasha', 'Karina'], 2, true)
// //
// // asd(['Masha', 'Dasha', 'Karina'], 2, true)
//
// interface IUser<T> {
//     name: string,
//     age: number,
//     status: boolean,
//     data: T
//     // house?: number
// }
//
// // const user: IUser = {name: 'MAX', age: 15, status: false, house: 5}
// const user: IUser<string[]> = {name: 'MAX', age: 15, status: false, data: ['asd', 'dddd', 'kjjj']}
//
// const user2: IUser<number[]> = {age: 15, name: 'karina', status: true, data: [1, 2, 3, 4]}
// const user3: Partial<IUser<boolean>> = {status: true, data: false}
//
// const getName = (data: IUser): string => {
//     return data.name
// }
//
// console.log(getName(user));


// class User {
//
//
//     constructor(private _name: string, public age: number, protected status: boolean) {
//     }
//
//     // getName():string{
//     //     return this.name
//     // }
//     //
//     // setName(name:string):void{
//     //     this.name = name
//     // }
//
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         if (value !== 'AAAA') {
//             this._name = value;
//         }
//     }
// }
//
// const user = new User('Max', 15, true);
// user.name = 'AAAAA'
// console.log(user.name);
//
// // const user2: User = {name: 'as', age: 15, status: false}

//
// abstract class Shape {
//     abstract perimeter(): number
//
//     // abstract area(): number
// }
//
// interface ITools {
//     area: () => number;
//     perimeter: () => number
// }
//
// interface IGreeting {
//     greeting: () => void
// }
//
// class Rectangle implements ITools, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//
//     perimeter(): number {
//         return (this.a + this.b) * 2;
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     greeting(): void {
//         console.log('Hello');
//     }
// }
//
// class Triangle implements ITools {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
//     area(): number {
//         return this.b * this.b / 2 * this.c;
//     }
// }
//
// const rectangle = new Rectangle(44, 55);
// const shapes: ITools[] = [
//     new Triangle(1, 2, 3),
//     rectangle,
//     new Triangle(2, 3, 4)
// ]
//
// for (let shape of shapes) {
//     console.log(shape.perimeter());
//     console.log(shape.area());
// }
//
// rectangle.
//
// // interface IAddress {
// //     city: string,
// //     house: number
// // }
// //
// // interface IUser {
// //     addresses: IAddress[]
// //     name: 'Max'
// // }
// interface IUser{
//     addresses:{
//         city:string,
//         house:number
//     }[],
//     name:'Max'
// }
declare class UserService0 {
    static greeting(): void;
}
interface IUser {
    id: number;
    name: string;
    age: string;
}
declare class UserService {
    private static readonly _userKey;
    private static getAll;
    static create(data: IUser): void;
    static showHtml(): void;
}

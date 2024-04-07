// ***  Own types  *** //
interface IUser {

}

type INumber = number | string | IUser | IUser[]

const func3 = (a: INumber): void => {
    console.log(a);
}

func3(true)

// ***  Return type  *** //

const func = (): number => {
    return 55
}

type MyUserType = ReturnType<typeof func>

const func2 = (a: MyUserType): void => {
    console.log(a);
}

func2(4)


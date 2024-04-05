interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const user: IUser = {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
            lat: "-31.8129",
            lng: "62.5342"
        }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
    }
}

console.log(user)



//************************************************************************************************//
interface IAddress2 {
    street: string,
    suite: string,
    city: string,
    zipcode: number
    geo: IGeo2
}

interface IGeo2 {
    lat: number,
    lng: number
}

interface ICompany2 {
    name: string,
    catchPhrase: string,
    bs: string
}

interface IUser2 {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress2,
    phone: string,
    website: string,
    company: ICompany2
}

const user2: IUser2 = {
    id: 1, name: 'Leanne Graham', username: 'Bret', email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: 92998 - 3874,
        "geo": {lat: -37.3159, lng: 81.1496}
    },
    phone: "1-770-736-8031 x56442", website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
console.log(user2);
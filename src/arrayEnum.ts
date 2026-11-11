const chaiFlavours: string[] = ["Masala", "Adrak"]

const chaiPrice:number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0,]

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "Masala", price: 20},
    {name: "Adrak", price: 10}
]

menu.push({name:"normal", price: 10})

const cities: readonly string[] = ["Delhi", "Jaipur"]

// cities.push("Pune") 
// this wont happen, as the array is read only

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

//Tuples

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]; //the boolean here is optional

userInfo = ["lala", 100]
userInfo = ["bala", 100, true]

// read only tuples

const location: readonly [number, number] = [28.90, 20]

const chaiItems: [name: string, price: number] = ["Masala", 20]


//Enum

// standard practise of Enum is to, give all the values in BOLD letters, all capitalized

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}
// since we added value in the enum's first type, so we need to add it in others, or it will automatically get incremented values

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
    
}

makeChai(ChaiType.MASALA)

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}
// not a good practise, as the values of enum that we assign should be all strings or all number or boolean, basically same data type
// although it wont give errors, but it is not a good practise, as said by Hitesh sir

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH

let t: [string, number] = ["chai", 10]
t.push("extra") //problem with tuples is that we can further add values, and it can cause issues during debugging, so we have to be careful
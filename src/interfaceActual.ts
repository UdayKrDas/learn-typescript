interface Chai {
    flavor: string;
    price: number
    milk? : boolean
}

const masala:Chai = {
    flavor: "masala",
    price: 20
}

interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {id: 1, name: "Ricky cafe"}

//---------------------------

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

apply50(20)

//------------------------------

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("hi");
        
    },
    stop(){
        console.log("bye");
        
    }
}

//----------------------------
// index signatures
// usually avoided as it confuses people sometimes

interface ChaiRatings {
    [flavor: string]: number
}


const ratings: ChaiRatings = {
    masalaasasas: 4.5,
    bulbulala: 20
}
//-----------------------------------------
// merging interface

interface User {
    name: string;

}

interface User {
    age: number;
}

const u: User = {
    name: "Ricky",
    age: 20
}

//-------------------------------

interface A {a: string}
interface B {b: string}

interface C extends A, B {}
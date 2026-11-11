let response: any = "42";

// Forceful type assertion using [as xyz]
let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "One thing"}';
let bookObject = JSON.parse(bookString) as Book 

console.log(bookObject);

// -----------------------------

const inputElement = document.getElementById("username") as HTMLInputElement

// -----------------------------

let value:any

value = "chai"
value = [1, 2, 3]
value = 2.5

value.toUpperCase() //wrong, as any doesnt care, this isnt showing error, but will give error once we console log

let newValue:unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5

if(typeof newValue === "string"){
    newValue.toUpperCase(); // correct, as unknown doesnt let it change to upper case, as there are different data types, so we need to give a condition and then change it, it helps us not make mistakes
}

//-------------------------------

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

//---------------------------------

const data:unknown = "chai aur code"
const strData: string = data as string 

//-----------------------------------

type Role = "admin" | "user" | "superAdmin"

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role;
}

//------------------------------

function neverReturn(): never{
    while(true){}
} 
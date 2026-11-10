const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// typescript infers it like - 
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// whenever we infer value or declare it's type, we always need to add ";" as said by Hitesh sir

//------------------------------

// let tea: {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// tea = {
//     name: "Ginger Tea",
//     price: 25,
//     isHot: true
// }

//------------------------

type Tea = {
    name: string;
    price: number;
    ingredients: string[]

}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["Ginger", "tea leaves"]
}


type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating Chai with", updates);
    
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
    
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})

type ChaiTea = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<ChaiTea, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 20
}


type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type PublicChai = Omit<Chai, "secretIngredients">
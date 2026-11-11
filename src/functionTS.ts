function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
    
}

makeChai("Masala", 2)

//-------------------------------------------


// when defining return type after () like "(): number" we need to return a number inside the function or else it will keep showing error 

function getChaiPrice():number{
    return 25
}

//--------------------------------

function makeOrder(order:string){
    if (!order) return null
    return order
}


function logChai(): void{
    console.log("Chai is ready");
    
}


// "?:" means optional
function orderChai(type?: string){
    
}


//-----------------

// added a default value here ie [="Masala"]
function orderChaitea(type: string = "Masala"){

}

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number{
    return 4
}
// we can add union to add two different data types which are possible

let subs: number | string = '1M'

// we can also add our custom data types

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = 'success'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window'

airlineSeat = 'window'





const orders = ['12', '20', '28', '42']

// let currentorder; 

// in order to not get "any" as data type, we need to define it in union instead, and can all add "undefined" as a type

let currentorder: string | undefined;

for(let order of orders){
    if (order === '28'){
        currentorder = order
        break
    }
    currentorder = '11'
}

console.log(currentorder);

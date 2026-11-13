function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(20)
wrapInArray({flavor: "Ginger"})

// generics mostly come useful in libraries and frameworks, and less used normally

//-----------------------------

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

pair("masala", "tea")
pair("masala", 20)
pair(20, {flavor: "Normal"})
pair({}, {})


//--------------------------

interface Box<T> {
    content: T
}

const NumberBox: Box<number> = {content: 10}
const NumberBoxCup: Box<string> = {content: "Black Tea"}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}


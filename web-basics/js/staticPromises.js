/* -------- */
let p1 = new Promise((resolve, reject) => { setTimeout(() => resolve("p1: Settled after 1000ms!"), 1000)})
let p2 = new Promise((resolve, reject) => { setTimeout(() => resolve("p2: Settled after 4000ms!"), 4000)})
let p3 = new Promise((resolve, reject) => { setTimeout(() => resolve("p3: Settled after 2000ms!"), 2000)})

/* 
    Promise.all() => restituisce una promise che passa allo stato 'fullfill' SOLO quando *TUTTE* le promise
    ricevute come parametro passano allo stato 'fullfill'
*/
const allSettled = Promise.all([p1,p2,p3])

console.log("Starting Promise.all()...")
allSettled.then(values => console.log(`all promise: ${JSON.stringify(values)}`))

/*
    Promise.race() => restituisce una promise che passa allo stato 'fullfill' SOLO quando *LA PRIMA* tra le promise
    ricevute come parametro passa allo stato 'fullfill'
*/
const firstSettled = Promise.race([p1,p2,p3])
firstSettled.then(value => console.log(`race promise: ${value}`))

/*
    Promise.any() => restituisce una promise che passa allo stato 'fullfill' SOLO quando *ALMENO UNA* tra le promise
    ricevute come parametro passa allo stato 'fullfill'
*/
const anySettled = Promise.any([p1,p2,p3])
anySettled.then(value => console.log(`any promise: ${value}`))
import { randomInt } from "crypto"

const myFirstPromise = new Promise((resolve, reject) => {
    if (randomInt(0, 11) % 2 === 0) {
        setTimeout(() => { resolve("Promise resolved!") }, 2000)
    } else {
        reject(new Error("Cannot resolve promise."))
    }
})

/*
 * then(onSuccess, onReject)
 */
myFirstPromise.then(val => console.log(val), err => console.log(err))
/* oppure — in maniera completamente equivalente */
/*
 * then(onSuccess).catch(onReject)
 */
myFirstPromise.then(val => console.log(val)).catch(err => console.log(err))

/* --------------------- */
/* fetch API */
const url = 'https://dummyjson.com/products'
fetch(url)
    .then(response => response.json(), err => console.error(err))
    .then(data => {
        console.log("Successfully received: ")
        console.log(JSON.stringify(data))
    })
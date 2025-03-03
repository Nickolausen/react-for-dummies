import { logic, symbols } from "./lib/logics.js"

/** @type Array<HTMLButtonElement> */
const gridView = []

/** @type HTMLElement */
let turnDisplay = undefined

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas")
    // oppure, in modo analogo,
    // const canvas = document.querySelector("#canvas")
    const [ hCells, vCells ] = [ 3, 3 ]
    const cellSize = canvas.clientWidth / hCells

    for (const cell of initializeGridView(hCells, vCells, cellSize)) {
        canvas.appendChild(cell)
    }

    document.getElementById("restart-btn").addEventListener('click', reset)
    turnDisplay = document.getElementById("turno-display")
    reset()
})

/**
 * Crea la griglia di bottoni di Tic Tac Toe
 * @param {Number} horizontalCellsNumber il numero di celle orizzontali 
 * @param {Number} verticalCellsNumber il numero di celle verticali
 * @param {Number} cellSize 
 */
function initializeGridView(horizontalCellsNumber, verticalCellsNumber, cellSize) {
    const out = []
    for (let i = 0; i < horizontalCellsNumber; i++) {
        for (let j = 0; j < verticalCellsNumber; j++) {
            const cell = document.createElement('button')
            cell.classList.add('cell')
            cell.style.width = String(cellSize).concat("px")
            cell.style.height = String(cellSize).concat("px")
            cell.setAttribute("data-coordinates", `${i} ${j}`)
            cell.addEventListener('click', handleCellClick)
            gridView.push(cell)
            out.push(cell)
        }
    }
    return out
}

function handleCellClick(e) {
    // Ottendo il <div> che ha lanciato l'evento 
    /** @type HTMLButtonElement */
    const target = e.target

    // Step-by-step:
    // - leggo il valore dell'attributo `data-coordinates` del div cliccato;
    // - divido questo valore (formattato come "x y" in base allo spazio), ottenendo un vettore di 2 stringhe
    // ["x", "y"]
    // - trasformo ogni elemento in un numero
    // - tramite array destructuring, assegno la prima posizione dell'array ad una variabile `x` e la 
    // seconda posizione ad una variabile `y`
    const [ x, y ] = target.getAttribute("data-coordinates").split(' ').map(coord => Number(coord))
    let hit = undefined
    try {
        hit = logic.makeMove(x, y)
    } catch (error) {
        console.error("Non puoi inserire un segno in una cella già piena!")
        return
    }
    turnDisplay.innerHTML = `Tocca a <b>${logic.turn}</b>`
    target.classList.add(hit === symbols["X"] ? "cross" : "circle")
    target.innerText = hit
    if (logic.isGameOver()) {
        gridView.forEach(cell => cell.setAttribute("disabled", "true"))
        const resultDisplay = document.getElementById("final-result-display")
        if (logic.winner) {
            resultDisplay.innerHTML = `<b>${logic.winner}</b> ha vinto!`
            resultDisplay.classList.toggle("success")
        } else {
            resultDisplay.innerHTML = `<b>Deadlock!</b> Nessuno ha vinto!`
            resultDisplay.classList.toggle("deadlock")
        }
    }
}

function reset() {
    logic.reset()
    gridView.forEach(cell => {
        cell.classList.remove("circle")
        cell.classList.remove("cross")
        cell.innerText = ""
        cell.removeAttribute("disabled")
    })
    const resultDisplay = document.getElementById("final-result-display")
    resultDisplay.innerHTML = ""
    resultDisplay.classList.remove("deadlock")
    resultDisplay.classList.remove("success")
    turnDisplay.innerHTML = `Tocca a <b>${logic.turn}</b>`
}
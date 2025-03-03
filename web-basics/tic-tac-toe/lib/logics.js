import { transposeMatrix } from "./utils.js"

// In JavaScript non esistono gli enum,
// quindi un possibile workaround potrebbe essere utilizzare 
// un oggetto con valori predefiniti
/** @type {Object.<string, string>} */
export const symbols = {
    EMPTY: '',
    X: 'X',
    O: 'O'
}

/**
 * Incapsula tutta la logica di Tic Tac Toe
 */
class GameLogic {
    constructor() {
        // Dichiaro la funzione
        this.reset = () => {
            // Griglia di gioco: 3x3 inizialmente piena di simboli vuoti
            this.grid = [
                [symbols["EMPTY"], symbols["EMPTY"], symbols["EMPTY"]],
                [symbols["EMPTY"], symbols["EMPTY"], symbols["EMPTY"]],
                [symbols["EMPTY"], symbols["EMPTY"], symbols["EMPTY"]],
            ]
            // Turno del giocatore: modo randomico per scegliere tra X e O
            this.turn = Math.random() % 2 === 0 ? symbols["X"] : symbols["O"]
            
            // Simbolo vincitore: può essere una stringa (X/O) oppure rimanere `undefined`
            /** @type {string | undefined} */
            this.winner = undefined
        }
        // Chiamo la funzione
        this.reset()
        /**
         * Scambia il turno tra X e O
         */
        this.changeTurn = () => {
            this.turn = this.turn === symbols["X"] ? symbols["O"] : symbols["X"]
        }
        /**
         * @type Boolean
         * @param {Number} x 
         * @param {Number} y 
         * @returns `true` se la griglia, in corrispondenza di (x,y), contiene qualcosa; `false` altrimenti
         */
        this.isFull = (x, y) => {
            return this.grid[x][y] !== symbols["EMPTY"]
        }
    }
}

/**
 * Compie una mossa.
 * @param {Number} x primo elemento della coppia di coordinate della cella selezionata 
 * @param {Number} y secondo elemento della coppia di coordinate della cella selezionata
 * 
 * @returns il simbolo piazzato in corrispondenza di (x,y) (può essere X o O)
 */
GameLogic.prototype.makeMove = function (x, y) {
    // Se la cella è piena, allora lancio un errore
    if (this.isFull(x, y)) {
        throw new Error("Invalid state!")
    }
    this.grid[x][y] = this.turn
    // Funzione utile per avere una buona formattazione di array e oggetti in console!
    console.table(this.grid)
    this.changeTurn()
    return this.grid[x][y]
}

/**
 * @type Boolean
 */
GameLogic.prototype.isGameOver = function () {
    const symbolsToCheck = [ symbols["X"], symbols["O"] ]
    // Per tutti i simboli dei 2 giocatori, controllo un eventuale tris sulle due diagonali
    for (const symbol of symbolsToCheck) {
        if (diagonalCheck(this.grid, symbol)) {
            this.winner = symbol
            return true
        }
    }

    // Faccio un controllo in orizzontale, su tutte le righe
    for (const symbol of symbolsToCheck) {
        if (horizontalCheck(this.grid, symbol)) {
            this.winner = symbol
            return true
        }
    }

    // Poiché la logica del controllo orizzontale è riutilizzabile,
    // posso riapplicarla sulla matrice trasposta (righe e colonne vengono scambiate)
    /** @type {Array<Array<String>>} */
    const transposedGrid = transposeMatrix(this.grid)
    for (const symbol of symbolsToCheck) {
        if (horizontalCheck(transposedGrid, symbol)) {
            this.winner = symbol
            return true
        }
    }

    // Se tutte le celle sono piene, allora è game over
    const rowsWithEmptyCells = this.grid.filter(row => row.includes(symbols["EMPTY"]))
    if (rowsWithEmptyCells.length === 0) {
        return true
    }

    return false
}

/**
 * @param {Array<Array<String>>} matrix 
 * @param {String} value 
 * @returns `true` se esiste almeno 1 riga che contiene solo simboli `value`, `false` altrimenti
 */
function horizontalCheck(matrix, value) {
    // Filtro tutte le righe che hanno 'value' in tutte le celle
    const rowsWithOnlyValue = matrix.filter(row => row.every(cell => cell === value))
    return rowsWithOnlyValue.length > 0
}

/**
 * 
 * @param {Array<Array<String>>} matrix 
 * @param {String} value 
 * @returns `true` se esiste almeno 1 diagonale che contiene solo simboli `value`, `false` altrimenti
 */
function diagonalCheck(matrix, value) {
    // Due contatori: 
    // - 1 per le occorrenze sulla diagonale principale (da in alto a sx a in basso a dx)
    // - 1 per le occorrenze sulla diagonale secondaria (da in alto a dx a in basso a sx)
    let [occurrencesMainDiagonal, occurrencesOtherDiagonal] = [0, 0]
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] === value) {
            occurrencesMainDiagonal++;
        }
        if (matrix[matrix.length - (i + 1)][i] === value) {
            occurrencesOtherDiagonal++;
        }
    }
    return occurrencesMainDiagonal === matrix.length || occurrencesOtherDiagonal === matrix.length
}

/**
 * Istanza della classe che incapsula tutta la logica di gioco
 */
export const logic = new GameLogic()
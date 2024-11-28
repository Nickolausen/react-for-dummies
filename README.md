# React for Dummies
## Istituto Tecnico Tecnologico 'Blaise Pascal' @ Cesena, IT

### Informazioni tecniche
- Corso STEM;
- 10h totali, suddivise in 4 lezioni pomeridiane di 2.5h ciascuna;
- tenuto da: Nicholas Magi, <nicholas.magi24[at]gmail.com>

### Contenuti del corso
---
#### [1] Introduzione a React, richiami di concetti base del Web Development

Quali sono gli unici linguaggi front-end che un browser può "capire": HyperText Markup Language, Cascading Style Sheet e JavaScript.
Rapidi esempi del loro effetto. Il principio D.R.Y.: Don't Repeat Yourself. Perchè la programmazione con solo HTML, CSS e JavaScript vìola suddetto principio.

Web frameworks: crescita esponenziale negli ultimi anni, più di 100 frameworks al momento in circolazione ma solo alcuni godono di tanta popolarità.

React: libreria per lo sviluppo di applicazioni web. Differenza **framework** vs. **libreria**. Feature di React: componenti, hooks, routing.
Presentazione del progetto guida: **ReAuction**, casa d'aste per installazioni artistiche di Alberto Timossi - rivisitazione di un vecchio progetto 'Astazor'. Aspetti tecnici del progetto: gestione componenti, routing e interazione con API esterna (utilizzo di FlickrAPI per ottenimento immagini da servizio esterno).

Setup del progetto: inizializzazione con Vite di un template React + JavaScript, sguardo alla struttura del progetto: le cartelle `node_modules/`, `public/` e `src/`. Sguardo alla struttura tipo di un componente - analisi di `App.jsx`.
Installazione di Bootstrap via npm.

---
#### [2] Componenti
Componenti **funzionali** in React: JSX - JavaScript eXtension, mix di HTML e codice JavaScript. 

Naming convention Regole per la scrittura di markup in JSX, regole per la scrittura di JavaScript in JSX, passaggio di Props da componente padre a componente figlio. 

Progetto "React Examples": Rendering condizionale, Event handling, Stato di un componente. Quando normali variabili non bastano: introduzione agli Hook con `useState()`. Come identificare uno stato, componenti con più stati. Lo stato è privato e isolato. "_Replace rather than mutate_": gestione di array e oggetti come elementi di stato. Stile di un componente: inline e tramite moduli. Sincronizzazione di un componente: lifecycle nei componenti classe vs. componenti funzionali, come gestire le tre fasi di vita di un componente —— nascita, aggiornamento e morte. Utilizzo di `useEffect()` per sincronizzare un componente con un servizio esterno. Passaggio di props da un componente ad un altro 'lontano' nell'UI Tree: drilling props vs utilizzo di Context. Cenni a `useContext()`, propedeutico alla comprensione del routing.

Thinking in React: i 5 passi necessari per strutturare una web application in React.

---
#### [3] Routing
React: progettazione di S.P.A. di default. Routing non supportato nativamente. `react-router` (versione 7.0): libreria esterna per gestire il routing di una web app React. Progetto "React Routing Examples": utilizzo di BrowserRouter, Routes e Route per definire le possibili strade di un'applicazione, e NavLink e Link per collegare effettivamente le varie parti della medesima. URL parametrica, hook `useParam()` per ottenere il parametro di ricerca dell'URL corrente.
[...]

---
#### [4] Gestione API esterna
Utilzzo di FlickAPI per ottenere immagini salvate in uno storage esterno.
[...]

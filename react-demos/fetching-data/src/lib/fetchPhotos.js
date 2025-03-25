/**
 * Funzione per "andare a prendere" le immagini da un API esterna.
 * 
 * @param {string} url 
 * @param {(server: string, id: string, secret: string) => string} pictureUrlFormatter
 */
export default async function fetchPhotos(url, pictureUrlFormatter) {
    /* 
     * Ottengo l'oggetto JSON più esterno, 
     * racchiuso (mi verrebbe meglio dire 'wrappato') 
     * dentro ad un oggetto della classe Response
     * 
     * Questo oggetto contiene diverse informazioni, divise in:
     * - header: parte della risposta che memorizza informazioni accessorie
     * - body: parte della risposta che memorizza il contenuto di nostro interesse
     */
    return fetch(url)
        // Chiamo il metodo `.json()` per "spacchettare"
        // la risposta e tenere solo le informazioni di interesse
        .then(response => response.json())
        /* 
        * Ora: l'attributo 'photoset', che contiene 'photo',
        * memorizza tutte le informazioni necessarie per costruire il link
        * che mi permette di ottenere la sorgente di una singola immagine (server, id, secret).
        * 
        * Ogni immagine ha un suo peso e necessita di un suo tempo per potersi caricare,
        * quindi è ragionevole pensare che il caricamento di ogni singola immagine possa 
        * essere visto come operazione asincrona da racchiudere in una `Promise`.
        * 
        * Voglio quindi restituire una unica `Promise` che racchiuda tutte le `Promise`
        * appena descritte, e ritenere questa 'risolta' solo quando tutte le immagini 
        * vengono correttamente caricate — e quindi pronte per essere mostrate sulla pagina. 
        * 
        * Per realizzare ciò, utilizzo Promise.all().
        */
        .then(data => Promise.all(
            // N.B.: la struttura dell'oggetto è nota a noi ma non a JavaScript,
            // quindi l'IntelliSense non sarà in grado di suggerire le sue proprietà
            data.photoset.photo.map(async (pic, idx) => {
                const picUrl = pictureUrlFormatter(pic.server, pic.id, pic.secret);
                // Non sono in un componente React ma in una normalissima funzione JS,
                // quindi non posso restituire un tag <img src={...} className={...} .../>
                // perché è del JSX!
                const res = new Image()
                res.src = picUrl
                res.className = "w-75"
                res.setAttribute("alt", `Photo ${pic.id}`)
                // Restituisco una coppia di elementi — rappresentata come array di lunghezza 2
                // (come accade in useState())
                // 
                // #1 — L'immagine con le informazioni necessarie per poter essere correttamente mostrata
                // #2 — L'indice dell'immagine all'interno dell'array originale (utile come `key` in un successivo momento) 
                return [res, idx]
        })))
}


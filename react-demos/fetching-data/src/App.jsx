'use client';

import { Suspense, use, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QUERY_URL, PICTURES_URL } from "./lib/secrets";
import Footer from "./Footer";
import fetchPhotos from "./lib/fetchPhotos";
import LoadingScreen from "./LoadingScreen";

function Gallery({ photoPromise }) {
  // Nuovo hook (proprio nuovo, introdotto nell'ultima versione di React [v.19])
  // permette di leggere il valore contenuto in una promise **CREATA LATO SERVER**.
  const pictures = use(photoPromise)
  return (
    <div className="container-fluid">
      <div className="row">
        {
          pictures.map((img) => {
            const [ pic, key ] = img
            return <div key={key} className="text-center py-4 col-12 col-md-6 col-lg-4 col-xl-2">
              <img className={pic.className} src={pic.src} alt={pic.alt} />
            </div>
          })
        }
      </div>
    </div>
  );
}

function App() {
  // Nuovo hook: useMemo()!
  // 
  // Permette di memorizzare il risultato di un'operazione, 
  // senza doverlo ricalcolare ad ogni re-render del componente.
  // 
  // Parametri: 
  // #1 — callback function: funzione di cui voglio memorizzare il risultato
  // #2 — deps: array di dipendenze (come per useEffect()), 
  // determina quali parametri devono cambiare affinché il risultato debba essere ricalcolato
  const photoPromiseCached = useMemo(() => fetchPhotos(QUERY_URL, PICTURES_URL), [QUERY_URL, PICTURES_URL])
  return (
    <>
      <h1 className="display-1 text-center pt-5">Galleria</h1>
      <ErrorBoundary fallback={<p>An error occurred!</p>}>
        <Suspense fallback={<LoadingScreen message={"Caricamento..."}/>}>
          <Gallery photoPromise={photoPromiseCached}/>
        </Suspense>
      </ErrorBoundary>
      <Footer/>
    </>
  );
}

export default App;
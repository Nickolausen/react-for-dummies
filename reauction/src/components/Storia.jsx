import Stack from './Stack/Stack'
import styles from './Storia.module.css'

function getImages() {
    const out = []
    const extension = ".webp"
    const partialPath = import.meta.env.BASE_URL.concat("some-installations/")
    for (let i = 1; i < 8; i++) {
        out.push({
            id: i, 
            img: partialPath
                .concat(i < 10 ? `0${i}`: i)
                .concat(extension)
        })
    }
    return out
}

export default function Storia() {
    const paragraphs = [
        "Alberto Timossi, Napoli 1965, si è formato fra Genova e Carrara dove ha frequentato la scuola di scultura dell’Accademia di Belle Arti, vive e lavora a Roma. Da qualche anno si interessa di arte ambientale realizzata con materiali derivanti dall’edilizia (tubi in PVC lavorati con la fiamma e lo smalto). Dopo aver allestito opere in contesti urbani, ex strutture industriali e centri storici, la sua ricerca si è orientata con decisione verso l’installazione scultorea nella natura. L’ambiente che si modifica a causa del progresso, e che spesso subisce i danni del cambiamento climatico, diventa il centro del suo interesse.",
        "Nel 2015 realizza “Illusione”, una grande installazione (quasi 80 metri di tubo con 63 cm di diametro) che taglia in diagonale i gradoni delle Cave Michelangelo di Carrara. L’opera rimane allestita per più di tre anni, e il colore arancio del materiale schiarisce fino a diventare completamente bianco. La fusione con l’ambiente è tale che la scultura si nota unicamente per l’ombra che proietta sul marmo.",
        "“Fata Morgana/Dentro l’Antropocene” è un’opera del 2017, allestita sul piccolo Lago del Rock Glacier del Col d’Olen, in Valle d’Aosta. Composta da 33 tubi galleggianti, compresi fra i 40 e i 500 cm di lunghezza, l’installazione simula un rosso canneto artificiale, a 2722 metri, e segnala la sofferenza dei ghiacciai di alta quota. Nel maggio del 2018, una versione riveduta di “Fata Morgana”, con il titolo di “La fonte sospesa”, viene allestita nella vasca della Fontana della Minerva nella Città Universitaria di Roma.",
        "Nel febbraio del 2018, l’attenzione dell’artista si sofferma su Lago ex Snia di Roma. Un profondo lago naturale sorto nel cantiere di un centro commerciale a causa di un errore umano. I 15 “Spilli” galleggianti, di fronte allo scheletro in cemento armato, segnalano la presenza di un luogo unico dove, dentro la città, la natura si è riappropriata di uno spazio che le veniva negato.",
        "“In memoria. Pietre nere per il Lago Sofia” segnala la traccia del cambiamento sulla pelle della montagna. In un solo giorno, il 24 luglio 2018, vengono poggiate al suolo 36 pietre nere, modellate in plastica, nel luogo dove sorgeva Sofia, il lago effimero generato ogni anno, fino al 1995, dal Ghiacciaio del Calderone sul Gran Sasso.",
        "“Segnacoli” è un intervento di agosto 2019. Sul Kothon, al centro dell’area sacra dei Fenici nella piccola isola di Mozia, sono installate 26 sculture che simulano i riflessi della volta celeste sull’acqua, e segnano i 26 secoli trascorsi dalla fondazione della piscina sacra.",
        "“Sirene” è l’installazione di 16 elementi di stoffa rossa inseriti a circa 2600 metri sul torrente Indren, alimentato dall’omonimo ghiacciaio sul versante valdostano del Monte Rosa (a cura di Nomas Foundation)."
    ]
    const images = getImages()

    return <section className="d-flex flex-column justify-content-center align-items-center px-5">
        <header className="align-self-end">
            <h1 className="display-1 text-center">Chi è <span className="accent-color fw-bold">Alberto Timossi</span>?</h1>
            <hr />
        </header>
        <main>
            <div className="container-fluid">
                <div className="row gy-5 g-lg-0">
                    <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start align-items-center">
                        <div className='d-xl-none'>
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardsData={images}
                                />
                        </div>
                        <div className='d-none d-xl-inline-block pe-5'>
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 216 * 2, height: 384 * 2 }}
                                cardsData={images}
                                />
                        </div>
                    </div>
                    <div className="history col-12 col-xl-6">
                        { paragraphs.map((par, idx) => <p key={idx} className={`${idx === 0 ? `${styles.first_paragraph} ` : ''}fs-5`}>{par}</p>)}
                    </div>
                </div>
            </div>
        </main>
    </section>
}
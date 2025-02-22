import Note from "../utility/Note"

export default function DrillingVSContext() {
    return <section className="w-75">
        <h2 className="display-3">Utilizzo di <span className="fw-bold">Context</span></h2>
        <hr className="w-50 m-0 pb-4"/>
        <h3 className="display-5">Passaggio di <span className="fw-bold">props</span> a componenti lontani.</h3>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-2 px-4 pt-5 pb-3">
            <figure className="border border-1 rounded-3 m-0 d-inline text-center pt-2">
                <img className="w-75" src={import.meta.env.BASE_URL + "props_drilling.jpg"}></img>
                <figcaption className="text-white mt-3 py-2 bg-primary fst-italic fs-4">Props drilling</figcaption>
            </figure>
            <figure className="border border-1 rounded-3 m-0 d-inline text-center pt-2">
                <img className="w-75" src={import.meta.env.BASE_URL + "props_context.jpg"}></img>
                <figcaption className="text-white mt-3 py-2 bg-primary fst-italic fs-4">Props via context</figcaption>
            </figure>
        </div>
        <Note>
            Images from <a className="text-decoration-none" target="_blank" href="https://react.dev/learn/passing-data-deeply-with-context">https://react.dev/learn/passing-data-deeply-with-context</a>
        </Note>
    </section>
}
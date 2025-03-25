import HeadingsWithDrilling from './HeadingsWithDrilling'

export default function PropsDrillingView() {
    return <section className="container">
        <div className="row w-100 pb-4">
            <h3 className="display-3 text-center fw-bold">Props drilling</h3>
            <hr />
            <h5 className="display-5 text-center fw-bold">without useContext()</h5>
        </div>
        <div className="row w-100">
            <div className="col-12 col-md-6">
                <h4 className="text-center display-5 pb-3">Gerarchia di titoli</h4>
                <HeadingsWithDrilling/>
            </div>
            <div className="col-12 col-md-6">
                <h4 className="text-center display-5 pb-3">Code behind</h4>
                <img src={import.meta.env.BASE_URL + "heading-hierarchy-drill.png"} alt="Code behind" className="w-100"/>
            </div>
        </div>
    </section>
}
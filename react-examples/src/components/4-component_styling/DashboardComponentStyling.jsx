import InlineStyle from "./InlineStyle";
import ModuleStyle from "./ModuleStyle";

export default function ComponentStyling() 
{
    return <section className="container-fluid">
        <div className="row pb-5">
            <h2 className="display-3"><span className="fw-bold">Stile</span> di un componente</h2>
        </div>
        <div className="row w-100 px-5 pt-4">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h3>InlineStyle</h3>
                <hr className="w-75 pb-3 my-0"/>
                <InlineStyle/>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h3>ModuleStyle</h3>
                <hr className="w-75 pb-3 my-0"/>
                <ModuleStyle/>
            </div>
        </div>
    </section>
}
import SimpleGallery from "./SimpleGallery";
import SimpleGalleryMultipleStates from "./SimpleGalleryMultipleStates";
import SimpleGalleryWithState from "./SimpleGalleryWithState";
import MutateToDoList from "./MutateToDoList";
import ReplaceToDoList from "./ReplaceToDoList";
import MutateMovingPoint from "./MutateMovingPoint";
import ReplaceMovingPoint from "./ReplaceMovingPoint";
import Note from "../utility/Note";

export default function DashboardStateManagement() 
{
    return <>
        <section>
            <h2 className="display-3"><span className="fw-bold">Stato</span> di un componente</h2>
            <div className="container-fluid text-center">
                <div className="row pt-5">
                    <div className="col-12 col-md-6">
                        <h3 className="display-6">SimpleGallery</h3>
                        <h4 className="fw-bold">without useState()</h4>
                        <SimpleGallery/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="display-6">SimpleGalleryWithState</h3>
                        <h4 className="fw-bold">w/useState()</h4>
                        <SimpleGalleryWithState/>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="row text-center">
                <div className="col-12">
                    <h2 className="display-4"><span className="fw-bold">Più stati</span> per un componente</h2>
                </div>
            </div>
            <div className="row text-center pt-3">
                <div className="col-12">
                    <h3 className="display-6 pb-3">SimpleGalleryMultipleStates</h3>
                    <SimpleGalleryMultipleStates/>
                </div>
            </div>
        </section>
        <section className="container-fluid text-center">
            <div className="row">
                <div className="col-12">
                    <h2 className="display-4">Stato <span className="fw-bold">privato & isolato</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 className="display-6 pt-4 pb-3">SimpleGalleryMultipleStates</h3>
                    <SimpleGalleryMultipleStates/>
                </div>
                <div className="col-12 col-md-6">
                    <h3 className="display-6 pt-4 pb-3">SimpleGalleryMultipleStates</h3>
                    <SimpleGalleryMultipleStates/>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center display-4"><span className="fw-bold">Replace</span> rather than <span className="fw-bold">Mutate</span></h2>
                    <h3 className="text-center pb-4">w/Arrays</h3>
                    <Note>
                        Tabella dei metodi più adatti: <a target="_blank" className="text-decoration-none" href="https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation">https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation</a>
                    </Note>
                </div>
            </div>
            <div className="pt-5 row w-75">
                <div className="col-12 col-md-6 p-4">
                    <h4 className="text-center mb-2">MutateToDoList</h4>
                    <hr className="pb-3 my-0"/>
                    <MutateToDoList/>
                </div>
                <div className="col-12 col-md-6 p-4">
                    <h4 className="text-center mb-2">ReplaceToDoList</h4>
                    <hr className="pb-3 my-0"/>
                    <ReplaceToDoList/>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center display-4"><span className="fw-bold">Replace</span> rather than <span className="fw-bold">Mutate</span></h2>
                    <h3 className="text-center">w/Objects</h3>
                </div>
            </div>
            <div className="pt-5 row w-75">
                <div className="col-12 col-md-6 p-4">
                    <h4 className="text-center mb-2">MutateMovingPoint</h4>
                    <hr className="pb-3 my-0"/>
                    <MutateMovingPoint/>
                </div>
                <div className="col-12 col-md-6 p-4">
                    <h4 className="text-center mb-2">ReplaceMovingPoint</h4>
                    <hr className="pb-3 my-0"/>
                    <ReplaceMovingPoint/>
                </div>
            </div>
        </section>
    </>
}
import { useState } from "react";
import MyBeautifulComponent from "./MyBeautifulComponent";
import NestedComponent from "../NestedComponent";

export default function RenderWithIf() 
{
    function handleOnClick() {
        setShouldRender((shouldRender) => !shouldRender)
        setCodeColor((color) => color === "red" ? "green" : "red")
    }

    const [ shouldRender, setShouldRender ] = useState(false)
    const [ codeColor, setCodeColor ] = useState("red")

    const changeStateUI = (
        <>
        <div className="border border-5 border-warning rounded p-5 bg-warning-emphasis">
            <div className="d-flex flex-column align-items-center gap-3">
                <code className="fs-5">shouldRender: <span className="fw-bold" style={{ color: codeColor }}>{ shouldRender ? "True" : "False" }</span></code>
                <button onClick={handleOnClick} className="btn btn-warning">
                    Set <code>shouldRender</code> to <code>{ !shouldRender ? "True" : "False" }</code>
                </button>
            </div>
        </div>
        <hr />
        </>
    )

    if (shouldRender) {
        return <div className="d-flex flex-column">
            {changeStateUI}
            <MyBeautifulComponent>
                <NestedComponent/>
            </MyBeautifulComponent>
        </div>
    }
    else {
        return <div>
            {changeStateUI}
            <p className="fs-5">N.B.: Devo necessariamente ritornare qualcosa ;(</p>
        </div>
    }
}
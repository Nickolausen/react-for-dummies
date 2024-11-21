import { useState } from "react";
import MyBeautifulComponent from "./MyBeautifulComponent";

export default function RenderWithTern() 
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

    return <>
        { changeStateUI }
        {/* <boolean condition> ? <if true> : <if false> */}
        { shouldRender ? <MyBeautifulComponent/> : <>
            <p className="fs-5">N.B.: Devo necessariamente ritornare qualcosa ;(</p>
        </>}
    </>
}
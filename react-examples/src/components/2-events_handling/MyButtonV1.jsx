import { useState } from "react"
import CodeBlockDisplay from "../utility/CodeBlockDisplay"

export default function MyButtonV1({ classNames, message }) 
{
    const [ showMessage, setShowMessage ] = useState(false)

    function handleOnClick() {
        setShowMessage(!showMessage)
    }

    return <>
        <div className={classNames + " d-flex flex-column gap-2 align-items-center"}>
            <CodeBlockDisplay>
                function <span className="fw-bold">handleOnClick</span>() {"{  }"} <br/>
                ... <br/>
                {" <button onClick={handleOnClick} ...></button>"}
            </CodeBlockDisplay>

            <button className="fs-4 btn btn-primary" onClick={handleOnClick}>
                Show message <span className="fst-italic">w/declared_function</span>
            </button>
            <p className="fw-bold fs-2"> {showMessage && message} </p>
        </div>
    </>
}
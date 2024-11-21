import { useState } from "react"
import CodeBlockDisplay from "../utility/CodeBlockDisplay"

export default function MyButtonV2({ classNames, message }) 
{
    const [ showMessage, setShowMessage ] = useState(false)

    return <div className={classNames + " d-flex flex-column gap-2 align-items-center"}>
        <CodeBlockDisplay>
            {" <button "} onClick={"{"}function <span className="fw-bold">handleOnClick</span>() {"{"} ... {"}"}&gt;{"</button>"}
        </CodeBlockDisplay>
        <button className="fs-4 btn btn-primary" onClick={function handleOnClick() {
            setShowMessage(!showMessage)
        }}>
            Show message <span className="fst-italic">w/inline_function</span>
        </button>
        <p className="fw-bold fs-2"> {showMessage && message} </p>
    </div>
}
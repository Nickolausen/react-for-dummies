import { useState } from "react"
import CodeBlockDisplay from "../utility/CodeBlockDisplay"

export default function MyButtonV3({ classNames, message }) 
{
    const [ showMessage, setShowMessage ] = useState(false)

    return <div className={classNames + " d-flex flex-column gap-2 align-items-center"}>
        <CodeBlockDisplay>
            {" <button onClick={() => { ... }}></button>"}
        </CodeBlockDisplay>
        <button className="fs-4 btn btn-primary" onClick={() => {
            setShowMessage(!showMessage)
        }}>
            Show message <span className="fst-italic">w/lambda_function</span>
        </button>
        <p className="fw-bold fs-2"> {showMessage && message} </p>
    </div>
}
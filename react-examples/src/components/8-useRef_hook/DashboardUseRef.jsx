import { useRef, useState } from "react"
import CodeBlockDisplay from "../utility/CodeBlockDisplay"
import { useEffect } from "react"
import PreviousStateHistory from "./PreviousStateHistory"

export default function DashboardUseRef() {
    const countRef = useRef(0)
    const [ count, setCount ] = useState(0)
    const inputRef = useRef({})

    function handleBoth() {
        setCount(count + 1)
        countRef.current++

        console.log(`Ref Value: ${countRef.current}`)
        console.log(`State Value: ${count}`)
    }

    function handleRefIncrement() {
        countRef.current++
        
        console.log(`Ref Value: ${countRef.current}`)
        console.log(`State Value: ${count}`)
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [ ])

    return <>
        <section>
            <div className="py-5 text-center">
                <h2 className="display-3">Meet <span className="fw-bold">useRef()</span></h2>
                <h4 className="display-5"><span className="fw-bold">useRef()</span> vs. <span className="fw-bold">useState()</span></h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="border border-1 col-8 d-flex flex-column align-items-center p-4">
                        <table className="table table-hover table-striped text-center">
                            <thead>
                                <tr>
                                    <th><code>state</code></th>
                                    <th><code>ref</code></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>{count}</code></td>
                                    <td><code>{countRef.current}</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex gap-2">
                            <button onClick={handleBoth} className="btn btn-primary">Increment both</button>
                            <button onClick={handleRefIncrement} className="btn btn-warning">Increment countRef</button>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center">
                        <h6>
                            <span className="fw-bold">Struttura</span> dell'oggetto
                        </h6>
                        <CodeBlockDisplay>
                            countRef = {JSON.stringify(countRef)}
                        </CodeBlockDisplay>
                    </div>
                </div>
                <div className="row text-center pt-5">
                    <div className="col-12 d-flex justify-content-center align-items-center gap-2">
                        <label htmlFor="inputExample">Input <code>focus()</code> example — after <code>useEffect()</code>: </label>
                        <input id="inputExample" ref={inputRef} type="password"/>
                    </div>
                </div>
            </div>
        </section>
        <PreviousStateHistory/>
    </>
}
import { useState } from "react";
import Dot from "./Dot";
import CodeBlockDisplay from "../utility/CodeBlockDisplay";

export default function ReplaceMovingPoint() 
{
    const [ position, setPosition ] = useState({ x: 0, y: 0 })
    
    function handleOnPointerMove(e) {
        let newPosition = { 
            x: e.clientX - (window.innerWidth / 2),
            y: e.clientY - (window.innerHeight / 2)
        }

        setPosition(newPosition)
    }

    return <>
        <CodeBlockDisplay>
            let newPosition = {"{ ... }"} <br/>
            <span className="fw-bold">setPosition</span>(newPosition)
        </CodeBlockDisplay>
        <div style={{ height: "300px" }} className="border border-1 position-relative" onPointerMove={handleOnPointerMove}>
            <Dot position={position}/>
        </div>
    </>
}
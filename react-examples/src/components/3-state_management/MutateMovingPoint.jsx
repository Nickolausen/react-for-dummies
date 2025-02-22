import { useState } from "react";
import Dot from "./Dot";
import CodeBlockDisplay from "../utility/CodeBlockDisplay";

export default function MutateMovingPoint() 
{
    const [ position, setPosition ] = useState({ x: 0, y: 0 })
    
    function handleOnPointerMove(e) {
        position.x = e.clientX - (window.innerWidth / 3)
        position.y = e.clientY - (window.innerHeight / 3)
    }

    return <>
        <CodeBlockDisplay>
            position.x = e.clientX - (window.innerWidth / 3) <br></br>
            position.y = e.clientY - (window.innerHeight / 3)
        </CodeBlockDisplay>
        <div className="border border-1 w-100" style={{ height: "300px" }} onPointerMove={handleOnPointerMove}>
            <Dot position={position}/>
        </div>
    </>
}
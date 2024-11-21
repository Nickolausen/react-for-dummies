import Picture from "./gallery/Picture";
import getPictures from "./ExternalAPI";
import { useState } from "react";
import CodeBlockDisplay from "../utility/CodeBlockDisplay";

export default function SimpleGalleryMultipleStates() {
    
    let [ idx, setIdx ] = useState(0);
    let [ showDescription, setShowDescription ] = useState(false)
    const myPictures = getPictures()
    let currentPicture = myPictures[idx]

    return <>
        <CodeBlockDisplay>
            idx = { idx } <br/>
            showDescription = { showDescription ? "True" : "False" } <br/>
            currentPicture = myPictures[{idx}]    
        </CodeBlockDisplay>
        <div className="d-flex flex-row gap-2 py-3 justify-content-center">
            <button onClick={() => { setIdx(idx - 1) }} disabled={idx - 1 < 0} className="btn btn-danger">Previous Slide</button>
            <button onClick={() => { setShowDescription(!showDescription) }} className="btn btn-success">Show {showDescription ? "Less" : "More"}</button>
            <button onClick={() => { setIdx(idx + 1) }} disabled={idx + 1 >= myPictures.length} className="btn btn-danger">Next Slide</button>
        </div>
        <Picture {...currentPicture} renderDescription={showDescription}/>
    </>
}
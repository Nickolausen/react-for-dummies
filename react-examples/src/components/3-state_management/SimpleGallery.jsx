import Picture from "./gallery/Picture";
import getPictures from "./ExternalAPI";
import CodeBlockDisplay from "../utility/CodeBlockDisplay";

export default function SimpleGallery() {
    
    let idx = 0;
    const myPictures = getPictures()
    let currentPicture = myPictures[idx]

    return <>
        <CodeBlockDisplay>
            idx = { idx } <br/>
            currentPicture = myPictures[{idx}]
        </CodeBlockDisplay>
        <div className="d-flex flex-row gap-2 py-3 justify-content-center">
            <button onClick={() => { idx-- }} disabled={idx - 1 < 0} className="btn btn-danger">Previous Slide</button>
            <button onClick={() => { idx++ }} disabled={idx + 1 >= myPictures.length} className="btn btn-danger">Next Slide</button>
        </div>
        <Picture {...currentPicture}/>
    </>
}
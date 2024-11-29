import { useNavigate } from "react-router"

/**
 * Home button working as demo for `useNavigate()` hook. 
 * @returns home button
 */
export default function HomeButton() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate("/")} className="btn btn-warning"
            style={{ position: "absolute", top: "5em", right: "1em"}}>
            <code>navigate("/")</code> 
        </button>
    )
}
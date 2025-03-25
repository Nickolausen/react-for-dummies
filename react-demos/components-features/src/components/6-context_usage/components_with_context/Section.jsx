import { useContext } from "react"
import { LevelContext } from "./LevelContext"

export default function Section({ children }) {
    const level = useContext(LevelContext)
    return <article className="border border-1 rounded-1 p-3">
        <LevelContext.Provider value={level + 1}>
            { children }
        </LevelContext.Provider>
    </article>
}
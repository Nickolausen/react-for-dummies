export default function CodeBlockDisplay({ children }) {
    return <code style={{ width: "fit-content" }} className="text-center align-middle d-block mx-auto my-3 border rounded p-3 bg-secondary bg-opacity-10">
        { children }
    </code>
}
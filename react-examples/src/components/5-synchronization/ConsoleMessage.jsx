export default function ConsoleMessage({ message }) {
    return <div className="border-0 list-group-item list-group-item-dark">
        { new Date().toLocaleTimeString() } —— { message }
    </div>
}
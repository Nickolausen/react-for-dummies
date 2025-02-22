export default function Note({ children }) {
    return <small className="text-center text-secondary border border-info p-2 rounded-2 bg-info bg-opacity-10">
        <i className="text-info fa-solid fa-circle-info"></i> {children}
    </small>
}
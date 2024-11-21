export default function Heading({ level, children }) {
    switch (level) {
        case 1:
            return <h1 className="py-1 m-0 text-danger">{children}</h1>
        case 2:
            return <h2 className="py-1 m-0 text-success">{children}</h2>
        case 3:
            return <h3 className="py-1 m-0 text-primary">{children}</h3>
        case 4:
            return <h4 className="py-1 m-0 text-secondary">{children}</h4>
        case 5:
            return <h5 className="py-1 m-0 text-info">{children}</h5>
        case 6:
            return <h6 className="py-1 m-0">{children}</h6>
        default:
            throw new Error("Unknown level: " + level)
    }
}
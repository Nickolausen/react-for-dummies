export default function NavLink({ href, isActive, children }) {
    return <a className={`text-white nav-link${isActive ? " active" : ""}`} aria-current="page" href={href}>
        { children }
    </a>
}
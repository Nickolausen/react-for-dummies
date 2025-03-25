import { NavLink } from "react-router"
import './NavBar.css'

/**
 * Navbar component; found the HTML at @link https://getbootstrap.com/docs/5.3/components/navbar/#supported-content
 * @returns the navbar w/ react-router navlinks
 */
export default function NavBar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to="/" className={"navbar-brand px-3"}>
                MyBeautifulNavbar
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className={"nav-link"} end>
                            Home 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-us" className={"nav-link"} end>
                            About Us 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shop" className={"nav-link"}>
                            Shop 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/a-fanculo" className={"nav-link"} end>
                            Somewhere unknown 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
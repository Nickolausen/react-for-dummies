import NavLink from "../NavLink";
import Brand from "./Brand";

export default function NavBar() {
    return <nav className="position-fixed fixed-top navbar navbar-expand-lg bg-black">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <Brand invert/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ filter: "invert(1)"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink href={"/home"} isActive>Home</NavLink>
          <NavLink href={"/storia"}>Storia</NavLink>
          <NavLink href={"/opere"}>Opere</NavLink>
          <NavLink href={"/aste"}>Aste</NavLink>
        </div>
      </div>
    </div>
  </nav>  
}
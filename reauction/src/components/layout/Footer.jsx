import Brand from "./Brand";

export default function Footer() {
    return <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Storia
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Opere
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Aste
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2025 <Brand/>, Inc</p>
    </footer>
  </div>    
}
import { Link } from "react-router-dom";

export default function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-tertiary navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-semibold" to="/">
          PT. Karbit Indonesia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Produk & Jasa
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#review">
                Review
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

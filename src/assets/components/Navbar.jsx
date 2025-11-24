import {Link} from "react-router-dom";

export default function SiteNavbar() {
    return (
        <nav
            className="navbar navbar-expand-lg custom-nav sticky-top"
            id="navbar"
            >
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
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item nav-link">
                            <a className="nav-link" href="/#hero">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/#product">
                                Produk & Jasa
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/#review">
                                Review
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/#contact">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

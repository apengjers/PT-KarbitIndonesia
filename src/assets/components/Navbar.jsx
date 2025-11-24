import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
export default function SiteNavbar() {
    const closeMobileMenu = () => {
        const nav = document.getElementById("navbarNavDropdown");
        if (nav && nav.classList.contains("show")) {
            nav
                .classList
                .remove("show");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg custom-nav sticky-top" id="navbar">
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

                        <li className="nav-item">
                            <HashLink
                                className="nav-link"
                                smooth="smooth"
                                to="/#hero"
                                onClick={closeMobileMenu}>
                                Home
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink
                                className="nav-link"
                                smooth="smooth"
                                to="/#product"
                                onClick={closeMobileMenu}>
                                Produk & Jasa
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink
                                className="nav-link"
                                smooth="smooth"
                                to="/#review"
                                onClick={closeMobileMenu}>
                                Review
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink
                                className="nav-link"
                                smooth="smooth"
                                to="/#contact"
                                onClick={closeMobileMenu}>
                                Contact
                            </HashLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

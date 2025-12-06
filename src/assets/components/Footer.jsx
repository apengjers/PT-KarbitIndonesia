import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function SiteFooter() {
    return (
        <footer className="pt-5">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <Link to="/" className="mb-2 text-decoration-none">
                                <span className="fs-5 fw-bold">PT. Karbit Indonesia</span>
                            </Link>
                            <p className="text-muted small mb-0">これは私のものじゃないの • Tokyo • Japan</p>
                            <p className="text-muted small mb-0">Telp: +62 821-1378-0480</p>
                        </div>

                        <div className="col-12 col-md-7">
                            <div className="row gx-4">
                                <div className="col-6 col-md-4">
                                    <h5>Perusahaan</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <HashLink to="/#hero" className="nav-link p-0 text-muted">Tentang</HashLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <h5>Layanan</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <HashLink to="/product/1" className="nav-link p-0 text-muted">Excavator</HashLink>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <HashLink to="/product/2" className="nav-link p-0 text-muted">Dozer</HashLink>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <HashLink to="/product/3" className="nav-link p-0 text-muted">Motor Grader</HashLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <h5>Bantuan</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <HashLink to="/#contact" className="nav-link p-0 text-muted">Kontak</HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pt-4 mt-5 border-top">
                        <p className="text-muted">© PT Karbit Indonesia 2025</p>
                        <small className="text-muted">Bukankah ini My</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

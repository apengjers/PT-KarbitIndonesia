import {Link} from "react-router-dom";

export default function SiteFooter() {
    return (
        <footer className="bg-body">
            <div className="container-fluid py-5">
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
                                            <Link to="/tentang" className="nav-link p-0 text-muted">Tentang</Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link to="/karir" className="nav-link p-0 text-muted">Karir</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <h5>Layanan</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Rakit Crane</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Angkut Semen</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Sewa Crane</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <h5>Bantuan</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <Link to="/contact" className="nav-link p-0 text-muted">Kontak</Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                        <p className="mb-0 text-muted">© PT Karbit Indonesia 2025</p>
                        <small className="text-muted">Bukankah ini My</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

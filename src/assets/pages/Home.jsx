import {Link, useLocation} from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faS, faThumbsUp, faShield  } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    const {hash} = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) 
                el.scrollIntoView({behavior: "smooth"});
            }
        }, [hash]);
    return (
        <div>
            {/* HERO */}
            <header className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 d-none d-md-block">
                            <img
                                src="https://w.wallhaven.cc/full/m3/wallhaven-m3gl2m.jpg"
                                alt="Crane dan Logistik"
                                className="img-fluid rounded shadow-sm"/>
                        </div>

                        <div className="col-md-7">
                            <h1 className="display-5 fw-bold">Penyedia Alat Berat Terbaik!</h1>
                            <p className="lead text-muted">
                                PT. Karbit Indonesia menyediakan layanan alat berat seperti Excavator, Dozer,
                                dan Motor Grader yang berkualitas tinggi untuk berbagai kebutuhan konstruksi
                                Anda.
                            </p>

                            <p>
                                <Link to="/products" className="btn btn-primary me-2">
                                    Lihat Layanan
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* REVIEW / TESTIMONIAL */}
            <section className="review-section py-5" id="review">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h2 className="display-6 fw-bold">Review Terbaik</h2>
                            <p className="lead text-muted">
                                Pelanggan kami puas dengan layanan rakit dan angkut crane yang kami berikan.
                                Berikut beberapa testimoni dari mereka:
                            </p>
                        </div>

                        <div className="col-lg-7">
                            <div
                                id="testimonialCarousel"
                                className="carousel slide"
                                data-bs-ride="carousel"
                                data-bs-interval="5000">
                                <div className="carousel-indicators mb-3">
                                    <button
                                        type="button"
                                        data-bs-target="#testimonialCarousel"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"></button>
                                    <button
                                        type="button"
                                        data-bs-target="#testimonialCarousel"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button
                                        type="button"
                                        data-bs-target="#testimonialCarousel"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body">
                                                <div className="d-flex align-items-start">
                                                    <img
                                                        src="https://th.wallhaven.cc/small/k7/k7jklm.jpg"
                                                        className="rounded-circle profile-img ms-5 me-3"
                                                        alt="Foto Pelanggan A"/>
                                                    <div>
                                                        <h5 className="mb-0">My</h5>
                                                        <small className="text-muted">Kontraktor - Kranji</small>
                                                        <p className="mb-5 text-muted">"Sangat memuaskan, layanan cepat dan berkualitas. Terima kasih!"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body">
                                                <div className="d-flex align-items-start">
                                                    <img
                                                        src="https://th.wallhaven.cc/small/k7/k7jklm.jpg"
                                                        className="rounded-circle profile-img ms-5 me-3"
                                                        alt="Foto Pelanggan B"/>
                                                    <div>
                                                        <h5 className="mb-0">My</h5>
                                                        <small className="text-muted">Pabrik Semen - Kranji</small>
                                                        <p className="mb-5 text-muted">"Gacor Banget Langsung aja Order Disini!"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body">
                                                <div className="d-flex align-items-start">
                                                    <img
                                                        src="https://th.wallhaven.cc/small/ox/oxod39.jpg"
                                                        className="rounded-circle profile-img ms-5 me-3"
                                                        alt="Foto Pelanggan C"/>
                                                    <div>
                                                        <h5 className="mb-0">My</h5>
                                                        <small className="text-muted">Kontraktor - Kranji</small>
                                                        <p className="mb-5 text-muted">"Gacor Banget Langsung aja Order Disini!"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#testimonialCarousel"
                                    data-bs-slide="prev"
                                    aria-label="Previous">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#testimonialCarousel"
                                    data-bs-slide="next"
                                    aria-label="Next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section>
                <div className="container py-5">
                    <h2 className="h3 mb-4">Mengapa Memilih Kami?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon={faShield} className="mb-3 text-primary fa-7x" />
                                    <h5 className="card-title">Keamanan Terjamin</h5>
                                    <p className="card-text text-muted">Kami prioritaskan keselamatan dalam setiap layanan rakit dan angkut crane.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon={faCubes} className="mb-3 text-primary fa-7x"/>
                                    <h5 className="card-title">Produk Berkualitas</h5>
                                    <p className="card-text text-muted">Kami selalu memastikan produk kami berkualitas dan sesuai standar industri.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon={faThumbsUp} className="mb-3 text-primary fa-7x"/>
                                    <h5 className="card-title">Layanan Profesional</h5>
                                    <p className="card-text text-muted">Tim kami terdiri dari teknisi berpengalaman yang siap membantu kebutuhan Anda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISI MISI */}
            <section>
                <div className="container mt-5 mb-4">
                    <h2 className="h3 mb-4 fw-bold">Visi Misi Kami</h2>

                    <div className="row g-4 mb-4">
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col">
                                            <img
                                                src="https://img4.gelbooru.com//images/6b/1c/6b1c394c87912a13289fc230d0ef54b1.jpeg"
                                                className="img-fluid"
                                                alt="visi"/>
                                        </div>
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <h3 className="card-title">Keamanan Terjamin</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col">
                                            <img
                                                src="https://img4.gelbooru.com//images/5c/1d/5c1dc8063d5f9ea43727e5f0579da9b3.jpeg"
                                                className="img-fluid"
                                                alt="misi"/>
                                        </div>
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <h3 className="card-title">Ini Kan My...</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <h3 className="card-title">Keamanan Terjamin</h3>
                                        </div>
                                        <div className="col">
                                            <img
                                                src="https://img4.gelbooru.com//images/6b/1c/6b1c394c87912a13289fc230d0ef54b1.jpeg"
                                                className="img-fluid"
                                                alt="visi"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <h3 className="card-title">Ini Kan My...</h3>
                                        </div>
                                        <div className="col">
                                            <img
                                                src="https://img4.gelbooru.com//images/5c/1d/5c1dc8063d5f9ea43727e5f0579da9b3.jpeg"
                                                className="img-fluid"
                                                alt="misi"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

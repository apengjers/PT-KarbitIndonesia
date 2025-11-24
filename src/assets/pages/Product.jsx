import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Product() {
    return (
        <section className="py-5" id="product">
            <div className="container">
                <h2 className="h3 mb-4 pt-5">Produk &amp; Jasa Kami</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card card-service h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Excavator</h5>
                                <img
                                    src="src/assets/img/excavator.png"
                                    className="img-fluid mb-3"
                                    alt="Excavator"/>
                                <p className="card-text text-muted flex-grow-1">
                                    Excavator yang digunakan oleh perusahaan kami adalah Excavator dengan kualitas
                                    tinggi
                                </p>
                                <Link to="/product/1" className="btn btn-outline-primary mt-3">Detail</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-service h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-5">Dozer</h5>
                                <img
                                    src="src/assets/img/dozer.jpg"
                                    className="img-fluid mb-5"
                                    alt="Dozer"/>
                                <p className="card-text text-muted flex-grow-1 mt-4">
                                    Dozer yang kami sewakan memiliki performa optimal untuk berbagai kebutuhan
                                    konstruksi.
                                </p>
                                <Link to="/product/2" className="btn btn-outline-primary mt-3">Detail</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-service h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-5">Motor Grader</h5>
                                <img
                                    src="src/assets/img/grader.jpg"
                                    className="img-fluid mb-3"
                                    alt="Motor Grader"
                                    />
                                <p className="card-text text-muted flex-grow-1 mt-5">
                                    Motor Grader yang kami sewakan memiliki performa optimal untuk berbagai
                                    kebutuhan konstruksi.
                                </p>
                                <HashLink to="/product/3" className="btn btn-outline-primary mt-3">Detail</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
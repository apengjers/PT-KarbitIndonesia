import { Link, useParams } from "react-router-dom";
import { products } from "/src/assets/data/products";
import { scrollToTop } from "./scroolFloating";
import { HashLink } from "react-router-hash-link";

export default function ProductDetail() {
  scrollToTop();
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h1 className="fw-bold mb-3">Produk Tidak Ditemukan</h1>
        <Link to="/product" className="btn btn-dark px-4">
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><HashLink to="/#product">Produk</HashLink></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-12 col-lg-5">
          <div className="border rounded shadow-sm p-3">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ objectFit: "cover", width: "100%", maxHeight: "480px" }}
            />
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          {product.price && (
            <h4 className="text-primary fw-semibold mb-4">
              Rp {product.price.toLocaleString("id-ID")}
            </h4>
          )}

          <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
            {product.description}
          </p>

          <div className="mb-4">
            <h5 className="fw-semibold mb-2">Spesifikasi</h5>
            <ul className="list-group small">
              <li className="list-group-item">Stok: {product.status}</li>
              <li className="list-group-item">Fungsi : {product.fungsi}</li>
              <li className="list-group-item">Pengiriman: Seluruh Indonesia</li>
            </ul>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <a
              href="https://wa.me/62895385303546"
              className="btn btn-success px-4"
              target="_blank"
            >
              Hubungi Penjual
            </a>
            <HashLink to="/#product" className="btn btn-outline-dark px-4">
              Kembali ke Produk
            </HashLink>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded shadow-sm bg-light">
        <h5 className="fw-semibold mb-3">Keunggulan Produk</h5>
        <ul className="mb-0">
          <li>Tahan lama dan berkualitas tinggi</li>
          <li>Desain modern dan elegan</li>
          <li>Harga kompetitif di kelasnya</li>
          <li>Telah teruji oleh banyak pelanggan</li>
        </ul>
      </div>
    </div>
  );
}

import { Link, useParams } from "react-router-dom";
import { products } from "/src/assets/data/products";

export default function ProductDetail() {
  const { id } = useParams();
  // Pastikan perbandingan aman: ubah id param ke number jika product.id bertipe number
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="container py-5">
        <h1>Product Not Found</h1>
        <Link to="/product" className="btn btn-link">Back to Product</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Product Detail</h1>

      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">{product.name}</h5>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid mb-3 rounded"
                style={{ objectFit: "cover", maxHeight: 500, width: "100%" }}
              />
              {product.price && (
                <p className="mt-auto fw-semibold">Harga: {product.price}</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card h-100 border-0">
            <div className="card-body">
              <h3 className="mb-3">Deskripsi Produk</h3>
              <p className="mb-4">{product.description}</p>

              <div className="d-flex gap-2">
                <button className="btn btn-primary">Hubungi Penjual</button>
                <Link to="/product" className="btn btn-outline-secondary">Kembali ke Produk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

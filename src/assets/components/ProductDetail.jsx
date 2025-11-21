import { Link, useParams } from "react-router-dom";
import  { products } from "/src/assets/data/products";

export default function ProductDetail() {
    const {id} = useParams();
    const product = products.find((item) => item.id == id);

    if (!product) {
        return <h1>Product Not Found</h1>;
    }
    
    return (
        <div>
            <h1>Product Detail</h1>
            <div className="card card-service h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <img
                        src= {product.image}
                        alt= {product.name}
                        className="img-fluid mb-3"
                    />
                    <p className="card-text text-muted flex-grow-1">
                        {product.description}
                    </p>
                </div>
            </div>
            <Link to="/product">Back to Product</Link>
        </div>
    );
}
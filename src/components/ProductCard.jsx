import { Link } from "react-router-dom";
import './ProductCard.css';
const ProductCard = ({ product, onAddToCart }) => {
  const inStock = product.id % 2 === 0; // fake stock logic
  const variants = ["Small", "Medium", "Large"]; // mock variants

  return (
    <div className="card h-100 text-center product-card">
      <img
        className="card-img-top p-3 product-image"
        src={product.image}
        alt={product.title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title.substring(0, 35)}...</h6>
        <p className="text-muted small">{product.description.substring(0, 60)}...</p>
        <p className="fw-bold">${product.price}</p>

        <select className="form-select mb-2">
          {variants.map((v, i) => (
            <option key={i}>{v}</option>
          ))}
        </select>

        <div className="mt-auto">
          <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm w-100 mb-2">
            View
          </Link>
          <button
            className={`btn btn-sm w-100 ${inStock ? "btn-dark" : "btn-secondary"}`}
            onClick={() => inStock && onAddToCart(product)}
            disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

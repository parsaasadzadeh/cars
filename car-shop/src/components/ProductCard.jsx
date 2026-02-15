export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card bg-dark text-white border-light">
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5>{product.name}</h5>
        <p>${product.price.toLocaleString()}</p>
        <button className="btn btn-primary" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

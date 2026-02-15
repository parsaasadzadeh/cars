import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img2 from "../assets/img2.jpg";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Alert from "../components/Alert";

const products = [
  { id: 1, name: "Porsche 911", price: 250000, img: img2 },
  { id: 2, name: "Porsche Taycan", price: 300000, img: img7 },
  { id: 3, name: "Porsche Panamera", price: 270000, img: img8 },
];

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.title = "Cars - Inventory";
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
  };

  return (
    <div className="container mt-5 py-5">
      <h2 className="text-center mb-4 text-white">Available Cars</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p.id}>
            <ProductCard product={p} onAdd={() => handleAddToCart(p)} />
          </div>
        ))}
      </div>

      <Alert
        message="Product successfully added to cart!"
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}

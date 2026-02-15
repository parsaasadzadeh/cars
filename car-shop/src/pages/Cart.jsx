import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Alert from "../components/Alert";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    document.title = "Cars - Cart";
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id, name) => {
    removeFromCart(id);
    setAlertMessage(`${name} has been removed from your cart.`);
    setShowAlert(true);
  };

  const handleClear = () => {
    clearCart();
    setAlertMessage("Your cart has been cleared.");
    setShowAlert(true);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setAlertMessage("Your cart is empty!");
      setShowAlert(true);
      return;
    }
    setAlertMessage(`Thank you for your purchase! Total: $${total.toLocaleString()}`);
    setShowAlert(true);
    clearCart();
  };

  return (
    <div className="container mt-5 py-5 text-white">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center"
              >
                {item.name} (x{item.quantity})
                <span>${item.price * item.quantity}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id, item.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${total.toLocaleString()}</h4>
          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-warning" onClick={handleClear}>
              Clear Cart
            </button>
            <button className="btn btn-success" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}

      <Alert
        message={alertMessage}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}

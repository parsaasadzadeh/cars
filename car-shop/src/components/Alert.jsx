import { useEffect } from "react";

export default function Alert({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        {message}
      </div>
    </div>
  );
}



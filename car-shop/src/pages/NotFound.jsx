import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Cars - Page Not Found";
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white text-center">
      <h1 className="display-3 fw-bold">404</h1>
      <p className="lead mb-4">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-light rounded-pill px-4 py-2">
        Go Home
      </Link>
    </div>
  );
}

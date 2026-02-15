import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
        <div className="mb-4 mb-md-0" style={{ maxWidth: "250px" }}>
          <h3>Cars</h3>
          <p>Your trusted car dealership. Find the perfect car for you!</p>
        </div>


        <div className="d-flex flex-column gap-2">
          <h5>Quick Links</h5>
          <Link className="text-white text-decoration-none" to="/">Home</Link>
          <Link className="text-white text-decoration-none" to="/shop">Shop</Link>
          <Link className="text-white text-decoration-none" to="/about">About</Link>
          <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
        </div>


        <div className="d-flex flex-column gap-2 mt-4 mt-md-0">
          <h5>Follow Us</h5>
          <a href="#" className="text-white text-decoration-none">Facebook</a>
          <a href="#" className="text-white text-decoration-none">Twitter</a>
          <a href="#" className="text-white text-decoration-none">Instagram</a>
        </div>
      </div>

      <hr className="border-light my-4" />

      <div className="text-center small">
        &copy; {new Date().getFullYear()} Cars. All rights reserved.
      </div>
    </footer>
  );
}

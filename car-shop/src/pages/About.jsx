import { useEffect } from "react";
import img7 from "../assets/img7.jpg";

export default function About() {
  useEffect(() => {
    document.title = "Cars - About";
  }, []);

  return (
    <div className="container mt-5 py-5 text-white">
      <h2 className="mb-4">About Us</h2>
      <p>
        Welcome to <strong>Asadzadeh Cars</strong> — your destination for premium, high-performance cars.
        We specialize in delivering luxury vehicles with unmatched design and speed.
      </p>
      <img
        src={img7}
        alt="About Porsche"
        className="img-fluid w-25 h-25 rounded mt-4 shadow"
      />
    </div>
  );
}

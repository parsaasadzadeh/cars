import { useState, useEffect } from "react";
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"

export default function Carousel() {
  const items = [
    { id: 1, img: img4, title: "Porsche 911", background: "#0d1117" },
    { id: 2, img: img5, title: "Porsche Taycan", background: "#111827" },
    { id: 3, img: img6, title: "Porsche Panamera", background: "#0f172a" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="car-gallery">
      <div className="carousel">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`item ${i === index ? "active" : ""}`}
            style={{ "--background": item.background }}
          >
            <div className="content">{item.title}</div>
            <img src={item.img} className="car" alt={item.title} />
          </div>
        ))}

        <div className="controls">
          <button id="prev" onClick={prev}>
            ‹
          </button>
          <button id="next" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

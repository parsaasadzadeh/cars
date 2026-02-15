import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
export default function Gallery() {
    return (
        <section className="gallery-section py-5" style={{ backgroundColor: "#000" }}>
            <div className="container">
                <h2 className="text-white text-center mb-5">Car Gallery</h2>
                <div className="row g-4">
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-item">
                            <img src={img1} alt="Car 1" className="img-fluid" />
                            <div className="overlay">
                                <h5>Model 1</h5>
                                <p>2025 Porsche</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-item">
                            <img src={img2} alt="Car 2" className="img-fluid" />
                            <div className="overlay">
                                <h5>Model 2</h5>
                                <p>2025 Porsche</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-item">
                            <img src={img3} alt="Car 3" className="img-fluid" />
                            <div className="overlay">
                                <h5>Model 3</h5>
                                <p>2025 Porsche</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

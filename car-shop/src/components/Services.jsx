export default function Services() {
  return (
    <section className="services py-5 d-flex align-items-center">
      <div className="video-container">
        <video className="video-item" autoPlay loop muted>
          <source src="/video/videoBcg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="video-overlay"></div>

      <div className="container py-5">
        <div className="row my-3">
          <div className="col-8 mx-auto col-lg-6 col-md-4 my-3">
            <div className="service py-5 pl-4">
              <span className="service-icon">
                <i className="fas fa-cogs"></i>
              </span>
              <h6 className="text-capitalize service-title">vehicle</h6>
              <h5 className="text-uppercase font-weight-bold">maintenance</h5>
            </div>
          </div>

          <div className="col-8 mx-auto col-lg-6 col-md-4 my-3">
            <div className="service py-5 pl-4">
              <span className="service-icon">
                <i className="fas fa-car-battery"></i>
              </span>
              <h6 className="text-capitalize service-title">battery</h6>
              <h5 className="text-uppercase font-weight-bold">replacement</h5>
            </div>
          </div>

          <div className="col-8 mx-auto col-lg-6 col-md-4 my-3">
            <div className="service py-5 pl-4">
              <span className="service-icon">
                <i className="fas fa-car-crash"></i>
              </span>
              <h6 className="text-capitalize service-title">roadside</h6>
              <h5 className="text-uppercase font-weight-bold">assistance</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

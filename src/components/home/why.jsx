import React from 'react';

function WhyUs() {
  return (
    <div className="whyus">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="whyus--title text-center">Why Choose Us</div>
          <div className="whyus--hr text-center" />
        </div>
        <div className="row mb-3">
          <p className="whyus--text text-center">
            Velhect has a team of brilliant minds that innovate the technology of future,
            and also creating smart and affordable consumer
            electronics to help businesses and individual to thrive.
            We strive to give our clients the best experience and results when we work together.
          </p>
        </div>
        <div className="row align-items-center  text-center">
          <div className="col-md-3 whyus__description text-center p-3">
            <div className="card p-3 border-0 shadow-sm">
              <img src="/images/fast-time1.png" alt="" className="img-fluid whyus__description--img " />
              <div className="whyus__description--subtitle pt-3 mb-4">Timely Delivery</div>
              <p className="whyus__description--text">
                We stick to stipulated time fixed for the delivery of products.
              </p>
            </div>
          </div>
          <div className="col-md-3 whyus__description text-center p-3">
            <div className="card p-3 border-0 shadow-sm">
              <img src="/images/Team.png" alt="" className="img-fluid whyus__description--img " />
              <div className="whyus__description--subtitle pt-3 mb-4">Expert Team</div>
              <p className="whyus__description--text">
                We consist of individuals that are expert in
                various fields to ensure quality products.
              </p>
            </div>
          </div>
          <div className="col-md-3 whyus__description text-center p-3 py-3">
            <div className="card p-3 border-0 shadow-sm">
              <img src="/images/Save.png" alt="" className="img-fluid whyus__description--img p-2" />
              <div className="whyus__description--subtitle pt-3 mb-4">Affordable Services</div>
              <p className="whyus__description--text">
                Our charges can be pocket-friendly.
              </p>
            </div>
          </div>
          <div className="col-md-3 whyus__description text-center p-3">
            <div className="card p-3 border-0 shadow-sm">
              <img src="/images/Quality.png" alt="" className="img-fluid whyus__description--img p-2" />
              <div className="whyus__description--subtitle pt-3 mb-4">Quality Assurance</div>
              <p className="whyus__description--text">
                We pay attention to every stage of the process of
                delivery or production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;

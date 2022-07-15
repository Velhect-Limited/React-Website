import React from 'react';

function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <div className="row p-5">
          <div className="partners--title text-center">Our Partners</div>
          <div className="partners--hr text-center mx-auto" />
        </div>
        <div className="row justify-content-center mx-auto text-center">
          <div className="col-md-3 ">
            <img src="/images/favatar.png" alt="" className="img-fluid partners--img" />
          </div>
          <div className="col-md-3">
            <img src="/images/image.jpg" alt="" className="img-fluid partners--img" />
          </div>
          <div className="col-md-3">
            <img src="/images/favatar.png" alt="" className="img-fluid partners--img" />
          </div>
          <div className="col-md-3">
            <img src="/images/img.png" alt="" className="img-fluid partners--img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Partners;

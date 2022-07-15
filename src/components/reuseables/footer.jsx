import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-auto justify-content-center">
          <div className="col-md-10 footer--cap">
            <div className="row">
              <div className="col-md-8">

                <p className="footer--text text-center">
                  <span><img src="/images/mail.png" alt="" className="img-fluid p-3" /></span>
                  Feel free to write us feedbacks on our products
                </p>
              </div>
              <div className="col-md-4 align-items-end p-3">
                <button type="button" className="footer--btn">Write a feedback</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 justify-content-center mx-auto ">
          <div className="col-md-2">
            <img src="/images/logo.png" alt="" className="img-fluid footer-img" />
          </div>
        </div>
        <div className="row border-top border-white align-items-center">
          <div className="col-md-8">
            <div className="row">
              <ul className="d-flex">
                <li className="p-5">Privacy Policy</li>
                <li className="p-5">FAQs</li>
                <li className="p-5">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <ul className="d-flex align-items-end text-end">
                <li className="p-3"><img src="/images/face.png" alt="" className="img-fluid" /></li>
                <li className="p-3"><img src="/images/insta.png" alt="" className="img-fluid" /></li>
                <li className="p-3"><img src="/images/twit.png" alt="" className="img-fluid" /></li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 text-center mx-auto p-3">
            @ 2022 Velhect All right reserved
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="container">
          <div className="row ">

            <div className="col-md-7">
              <div className="signup--title mb-2">Contact Us</div>
              <div className="signup--hr" />
              <p className="text-start py-2">
                Share the details of your project (e.g scope of project, timeframe)
                Our team would carefully study them and we will figure out something together
                {' '}

              </p>
              <form>
                <div className="row g-3">
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Email Address" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Company Name" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Company " />
                  </div>
                  <div className="col-3">
                    <button type="button" className="signup--btn">send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;

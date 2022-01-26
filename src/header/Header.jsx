import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-section">
          <div className="row">
            <div className="col-12 col-lg-6 order-last order-lg-first header-left-side d-flex justify-content-center align-items-start flex-column">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia quaerat quibusdam impedit alias culpa
              </p>
              <h3>Get Early Access</h3>
              <div className="input-group mt-3">
                <input
                  type="email  "
                  className="rounded-pill w-75 me-3 form-control-text p-2"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-btn">Get It Now</div>
              </div>
            </div>
            {/* main header right side */}
            <div className="col-12 order-md-first order-sm-first col-lg-6 main-hero-img header-right-side d-flex justify-content-center align-items-center">
              <img
                src="./images/hero1.jpg"
                className="img-fluid"
                alt="hero img"
              />
              <img
                src="./images/hero3.jpg"
                className="img-fluid main-hero-img-2"
                alt="hero img 4"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (ele) => {
    name = ele.target.name;
    value = ele.target.value;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="row">
                <div className="contact-left col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />
                    Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.Officia quaerat quibusdam impedit alias culpa
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contact"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-right col-12 col-lg-7">
                  <form method="POST" className>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Enter Your First Name"
                          value={userData.firstname}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter Your Last Name"
                          value={userData.lastname}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          value={userData.phone}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="address"
                          placeholder="Add address"
                          value={userData.address}
                          onChange={postUserData}
                          className="form-control contact-input"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                          className="form-control "
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">
                        <p className="main-hero-para">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.Officia quaerat quibusdam impedit alias culpa
                        </p>
                      </label>
                    </div>
                    <button
                      type="submit"
                      onClick={submitData}
                      className="btn btn-style w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

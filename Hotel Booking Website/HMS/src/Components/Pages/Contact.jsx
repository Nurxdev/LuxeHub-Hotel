import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      {/* Page Section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>Contact</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <a href="#">Home</a> &nbsp; / &nbsp;
                      <span className="fw-bold">Contact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 order-1 mb-4">
              <div className="mb-4 d-flex align-items-start ">
                <div className="contact-icon rounded-circle text-white d-flex align-items-center justify-content-center">
                  <i className="bi bi-map"></i>
                </div>
                <div className="contact-info ms-3">
                  <h5 className="mb-1">Office Addres</h5>
                  <p className="mb-0">289 st kilda Road, Mumbai</p>
                </div>
              </div>
              <hr />
              <div className="mb-4 d-flex align-items-start">
                <div className="contact-icon rounded-circle text-white d-flex align-items-center justify-content-center">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-info ms-3">
                  <h5 className="mb-1">Working Hours</h5>
                  <p className="mb-0">
                    Monday to Friday 09:00 to 18:30 <br /> Saturday 15:30
                  </p>
                </div>
              </div>
              <hr />
              <div className="mb-4 d-flex align-items-start ">
                <div className="contact-icon rounded-circle text-white d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-info ms-3">
                  <h5 className="mb-1">Message Us </h5>
                  <p className="mb-0">
                    support@example.com <br /> info@example.com
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8 order-2 contact-form-wrap"
              style={{ backgroundColor: "#f7f5f1" }}
            >
              <h1 className="mb-5 text-center fs-1 fw-bolder">Get In Touch</h1>
              <form>
                <div className="row mb-4 contact-wrap">
                  <div className="col input-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="col input-box">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row mb-4 contact-wrap">
                  <div className="col input-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>

                  <div className="col input-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="mb-4 input-box">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Write comments"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

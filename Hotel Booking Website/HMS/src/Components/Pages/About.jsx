import React from "react";
import { Link } from "react-router-dom";
import hotelImg from "../../assets/about-1.png";
import bedroomImg from "../../assets/about-2.png";
import skillimg from "../../assets/skills-img.png";
import element1 from "../../assets/bg-1.png";
import element2 from "../../assets/bg-2.png";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
function About() {
  return (
    <>
      {/* Page Section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>About Us</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <a href="#">Home</a> &nbsp; / &nbsp;
                      <span className="fw-bold">About Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about-section my-5 py-5" id="about">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 position-relative image-wrapper">
              <img
                src={hotelImg}
                alt=""
                className="img-fluid shadow-sm main-img"
              />
              <img
                src={bedroomImg}
                alt=""
                className="overlay-img shadow-sm p-1 bg-white"
              />
            </div>
            <div className="col-lg-6 text-wrapper">
              <div className="section-title about-title">
                <span>About Us</span>
                <h2>
                  Most Safe & Rated <br /> Hotel In London
                </h2>
              </div>
              <p>
                Morbi tortor uma, placerat vel arcu quis, fringilla egestas
                neque Morbi sit amet porta erat, quis rutrum risus. Vivamus et
                gravida nibh, quis posuere felis in commodo mi lectus, Integer
                ligula lorem, finibus vitae lorem vitae tincidunt dolor
                consequat quis.
              </p>
              <p>
                Cras finibus laoreet felis et hendrerit Integer ligula lorem,
                finibus vitae lorem at, egestas consectetur urna Integer id
                ultricies elit. Maecenas sodales nibh, quis posuere felis in
                commodo mi lectus venenatis metus eget fringilla Suspendisse
                varius ante eget lorem tempus blandit. Aenean eu vulputate
                lorem, quis auctor lectus.
              </p>

              <div className="feature-peregraphs mt-4 mb-4">
                <p>
                  <i className="ri-check-line"></i> 24 Month / 24,000Km
                  Nationwibe Warranty monotone.
                </p>
                <p>
                  <i className="ri-check-line"></i> Curabitur dapibus nisl a
                  urna cgue, in phraretra urna accumsan.
                </p>
                <p>
                  <i className="ri-check-line"></i> Customer Rewards Program and
                  excellent technology.
                </p>
              </div>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog py-5 position-relative">
        <div className="container">
          <img
            src={element1}
            className="element element1 position-absolute"
            alt=""
          />
          <div className="row">
            <div className="section-title text-center d-flex flex-column align-items-center">
              <span>Our Blog</span>
              <h2>Latest Blog & News</h2>
              <p style={{ maxWidth: "800px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, est libero. Sunt, aperiam! Veniam, amet aspernatur
                dicta consequuntur, necessitatibus ex rerum nihil id non culpa
                inventore nemo quaerat accusamus vitae!
              </p>
            </div>
            <div className="blog-wrapper mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-3">
                  <div className="blog-item">
                    <div className="blog-image overflow-hidden">
                      <img src={blog1} className="img-fluid" alt="" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">24th March 2025</div>
                      <h4 className="mb-3">
                        Cras accums nulla nec lacus ultries placerat.
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <button className="blog-btn">Read More</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <div className="blog-item">
                    <div className="blog-image overflow-hidden">
                      <img src={blog2} className="img-fluid" alt="" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">24th March 2025</div>
                      <h4 className="mb-3">
                        Cras accums nulla nec lacus ultries placerat.
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <button className="blog-btn">Read More</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <div className="blog-item">
                    <div className="blog-image overflow-hidden">
                      <img src={blog3} className="img-fluid" alt="" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">24th March 2025</div>
                      <h4 className="mb-3">
                        Cras accums nulla nec lacus ultries placerat.
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <button className="blog-btn">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resort */}
      <div className="resort my-5 mb-0">
        <div className="container-fluid position-relative">
          <img
            src={element2}
            className="element element2 position-absolute"
            alt=""
          />
          <div className="row p-0 align-items-center">
            <div className="col-lg-6 image-wrapper p-0">
              <img
                src={skillimg}
                className="img-fluid shadow-sm resort-img"
                alt=""
              />
            </div>

            <div className="col-lg-4 ps-5 pt-3 text-wrapper resort-content">
              <div className="section-title about-title">
                <span>Luxury Hotel & Resort</span>
                <h2>The Adriatic Pearl</h2>
                <p>
                  Experience timeless elegance and world-class comfort at our
                  luxury resort, located on the breathtaking Adriatic coast.
                  Every detail is designed to create a perfect balance of
                  relaxation, privacy, and sophistication.
                </p>

                <p>
                  From stunning sea views to personalized service, we offer an
                  unforgettable stay where modern luxury meets natural beauty.
                  Whether you’re here to unwind or explore, your journey begins
                  with us.
                </p>
                <button className="btn discover-btn mt-3">
                  Book Your Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

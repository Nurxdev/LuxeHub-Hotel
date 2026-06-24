import React from "react";
import { Link, useNavigate } from "react-router-dom";

import bedroomImg from "./../../assets/about-2.png";
import singleServiceIcon01 from "./../../assets/option-icon-1.png";
import singleServiceIcon02 from "./../../assets/option-icon-2.png";
import singleServiceIcon03 from "./../../assets/option-icon-3.png";
import singleServiceIcon04 from "./../../assets/option-icon-4.png";
import singleServiceIcon05 from "./../../assets/option-icon-5.png";
import element1 from "./../../assets/bg-1.png";
import element2 from "./../../assets/bg-2.png";
import resorts from "./../../assets/feature.png";
import bookingImg from "./../../assets/Bookings.png";
import playVideo from "./../../assets/play-btn.png";

import Nav from "./../Nav/Nav";

const RoomsData = [
  {
    id: "R1",
    name: "Classic Balcony Room",
    src: bedroomImg,
    Price: "$500",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
  {
    id: "R2",
    name: "Superior Double Room",
    src: bedroomImg,
    Price: "$300",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
  {
    id: "R3",
    name: "Delux Double Room",
    src: bedroomImg,
    Price: "$450",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
  {
    id: "R4",
    name: "Superior Double Room",
    src: bedroomImg,
    Price: "$450",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
  {
    id: "R5",
    name: "Super Balcony Double Room",
    src: bedroomImg,
    Price: "$550",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
  {
    id: "R6",
    name: "Delux Double Room",
    src: bedroomImg,
    Price: "$350",
    description: "Aenean vehivula ligula eu rhoncus prottitor.",
  },
];

function Rooms() {
    const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/RoomsDetails/${id}`);
  };
  return (
    <>
      <Nav />
      {/* Page Section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>Our Rooms</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <a href="#">Home</a> &nbsp; / &nbsp;
                      <span className="fw-bold">our Rooms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div className="container py-5">
        <div className="row">
          {/* Rooms card */}
          {RoomsData.map((Room, index) => (
            <div className="col-md-6 col-lg-4 mt-4" key={index}>
              <div className="single-service h-100 border rounded overflow-hidden shadow-sm">
                <div className="service-thumb">
                  <a
                    href={Room.src}
                    className="gallery-link popup-image"
                    tabIndex={-1}
                  >
                    <img src={Room.src} alt={Room.name} className="img-fluid" />
                  </a>
                </div>
                <div className="service-content p-4">
                  <div className="day-book">
                    <ul>
                      <li>{Room.Price}/Night</li>
                      <li style={{ cursor: "pointer" }}>
                         <a onClick={() => handleClick(Room.id)}>Book Now</a>
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">{Room.name}</h5>
                  <p className="card-text mt-3 room-pere">{Room.description}</p>
                  <div className="icon">
                    <ul>
                      <li>
                        <img
                          src={singleServiceIcon01}
                          className="img-fluid"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={singleServiceIcon02}
                          className="img-fluid"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={singleServiceIcon03}
                          className="img-fluid"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={singleServiceIcon04}
                          className="img-fluid"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={singleServiceIcon05}
                          className="img-fluid"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                src={resorts}
                className="img-fluid shadow-sm resort-img"
                alt=""
              />
            </div>

            <div className="col-lg-4 ps-5 pt-3 text-wrapper resort-content">
              <div className="section-title about-title">
                <span>Luxury Hotel & Resort</span>
                <h2>Pearl Of The Adriatic</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae porro saepe, perspiciatis reprehenderit, nam, ratione
                  sapiente dolorem magni quam fugit itaque veritatis tempore
                  optio expedita minima in eaque perferendis. Voluptatum?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni, neque eligendi. Odit obcaecati laborum dicta possimus
                  cumque. Ad atque odit iste, praesentium eum, eligendi
                  voluptate voluptatem nobis at impedit nemo.
                </p>
                <button className="btn discover-btn mt-3">DISCOVER MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Room */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 mb-4 d-flex flex-column">
              <div className="section-title book-title">
                <span>Make Appointment</span>
                <h2>Book A Room</h2>
              </div>
              <form>
                <div className="row mb-3 mt-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-calendar me-2 text-warning"></i>
                      check in Date
                    </label>
                    <input type="date" className="form-control p-3" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-calendar2-check me-2 text-warning"></i>
                      check Out Date
                    </label>
                    <input type="date" className="form-control p-3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-people-fill me-2 text-warning"></i>
                      Adults
                    </label>
                    <select className="form-select p-3">
                      <option>Adults</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>3+</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-door-closed-fill me-2 text-warning"></i>
                      Room
                    </label>
                    <select className="form-select p-3">
                      <option>Room</option>
                      <option>Single</option>
                      <option>Double</option>
                      <option>Suites</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn text-white px-4 py-2 mt-2 w-100"
                >
                  BOOK TABLE NOW
                </button>
              </form>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <img src={bookingImg} className="img-fluid booking-img" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center banner-box">
              <img src={playVideo} className="img-fluid" alt="" />
              <h1>Take A Tour of Luxury</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rooms;

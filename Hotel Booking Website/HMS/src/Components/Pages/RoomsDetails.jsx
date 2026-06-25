import React from "react";
import bedroomImg from "./../../assets/about-2.png";
import RoomImage01 from "./../../assets/single-room-img02.png";
import RoomImage02 from "./../../assets/single-room-img03.png";
import stars from "./../../assets/stars.png";
import Nav from "./../Nav/Nav";
import { Link, useParams } from "react-router-dom";

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

function RoomsDetails() {
  const { id } = useParams();
  const foundRoom = RoomsData.find((item) => item.id == id);
  return (
    <>
      {/* Page Section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>Rooms Details</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <Link to="/">Home</Link> &nbsp; / &nbsp;
                      <span className="fw-bold">Rooms Details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RoomsDetails */}
      <div className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 order-2">
              <div className="sidebar services-sidebar">
                <div className="sidebar-widget categories">
                  <div className="widget-title">Book A Room</div>
                  <div className="booking">
                    <div className="contact-bg">
                      <form className="contact-form mt-3">
                        <div className="row">
                          <div className="col-lg-12 mb-3">
                            <div className="contact-field position-relative mb-2">
                              <label>
                                <i className=""></i>
                                Check In Date
                              </label>
                              <input type="date" />
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="contact-field position-relative mb-2">
                              <label>
                                <i className=""></i>
                                Check Out Date
                              </label>
                              <input type="date" />
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="contact-field position-relative mb-2">
                              <label>
                                <i className=""></i>
                                Adults
                              </label>
                              <select>
                                <option>Adults</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="contact-field position-relative mb-2">
                              <label>
                                <i className=""></i>
                                Room
                              </label>
                              <select>
                                <option>Rooms</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="btn ss-btn">
                              <span>Book Table Now</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 order-1">
              <div className="position-relative">
                <div className="position-relative">
                  <div className="container">
                    <div className="row">
                      <div className="position-relative col-xl-6 col-lg-12 col-md-12">
                        <img
                          src={foundRoom?.src}
                          alt={foundRoom?.name}
                          className="img-fluid main-room"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12">
                        <img
                          src={RoomImage01}
                          className="img-fluid mb-2 hide-element"
                          alt=""
                        />
                        <img
                          src={RoomImage02}
                          className="img-fluid mb-2 hide-element"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-5 p-2">
                <div className="row align-items-center mb-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="">
                      <h2>{foundRoom.name}</h2>
                      <span>{foundRoom.Price}/ Night</span>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex justify-content-end">
                    <img src={stars} className="raiting-image" alt="" />
                  </div>
                </div>
                <p>{foundRoom.description}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur excepturi architecto quia ratione, neque cumque
                  incidunt delectus quasi qui quos repellendus culpa molestias
                  quaerat quod, corporis placeat veritatis natus quas!
                </p>
                <h3>Room Feature</h3>
                <ul className="room-features d-flex align-items-center">
                  <li>TV</li>
                  <li>Free WI-FI</li>
                  <li>Air Condition</li>
                  <li>Heater</li>
                  <li>Phone</li>
                  <li>Laundry</li>
                  <li>Adults: 2</li>
                  <li>Size: 24m</li>
                  <li>Bed Type: One bed</li>
                </ul>
                <a href="#" className="btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsDetails; 

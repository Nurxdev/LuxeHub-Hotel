import React from "react";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed">
        <div className="container-fluid px-5">
          <p className="navbar-brand d-flex align-items-center m-0">
            <a href="#" className="logo">
              Luxe<span>Hub</span>
            </a>
          </p>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="menu navbar-nav align-items-center">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Our Rooms</a>
              </li>
              <li className="nav-item">
                <a href="#">Facilities</a>
              </li>
              <li className="nav-item">
                <a href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn rounded nav-btn">RESERVATION</button>
      </nav>
    </>
  );
}
export default Nav;

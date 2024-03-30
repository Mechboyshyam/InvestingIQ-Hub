import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav-color">
          <span className="navbar-brand ms-2 text-light fw-bold fs-3">
            InvestingIQ-Hub
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="" className="text-decoration-none text-light ms-1 fs-5 fw-semibold btn">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="blogs" className="text-decoration-none text-light ms-1 fs-5 fw-semibold btn">
            Blogs
                </Link>
              </li>

              <li>
                  <Link to="about" className="text-decoration-none text-light ms-1 fs-5 fw-semibold btn">
                    About
                  </Link>
                  </li>
              
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-decoration-none text-light ms-1 fs-5 fw-semibold btn "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu bgTeal">
                  <li>
                  <Link to="about" className="text-decoration-none text-light ms-1 fs-5 fw-semibold btn">
                    About
                  </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 text-center search-box"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
              />
              <span>
              <Link to="contact" className="text-decoration-none text-light ms-1 fs-5 fw-semibold btn">
                    Contact
                  </Link>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

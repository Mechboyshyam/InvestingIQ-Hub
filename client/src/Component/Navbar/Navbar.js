import React, { Component } from "react";
import './Navbar.css';
import DateTime from "../Date/date";

export default class Navbar extends Component {
  render() {
   
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top z-3 bg-teal ">
          <span className="navbar-brand bold">InvestingIQ Hub</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-4">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active btn bold">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active bold btn">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item active btn bold">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a> */}
                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div> */}
              </li>
              <li className="nav-item">
                {/* <span className="nav-link text-center">
                  Shyam Bhai...
                </span> */}
              </li>
            </ul>
            </div>
            <div className="col-4">
              <span className="btn btn-outline-dark border-bold bold">
              <DateTime></DateTime>
              </span>
            </div>
           <div className="col-4 ">
           <form className="form-inline search-box my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 text-center border-bold"
                type="search"
                placeholder="Search the content"
                aria-label="Search"
              />
              <button
                className="btn bold btn-outline-dark my-2 border-bold my-sm-0"
                type="submit"
              >
                Contact us
              </button>
            </form>
           </div>
          </div>
        </nav>
      </>
    );
  }
}

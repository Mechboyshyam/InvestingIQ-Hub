import React, { Component } from "react";
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">InvestingIQ Hub</span>
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
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
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
              <span className="user-name">
                Shyam Bhai...
              </span>
            </div>
           <div className="col-4">
           <form className="form-inline search-box my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button> */}
            </form>
           </div>
          </div>
        </nav>
      </>
    );
  }
}

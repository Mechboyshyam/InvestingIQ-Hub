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

          <div className="main_nav collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-4">
            <ul className="nav_items navbar-nav mr-auto">
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
                className="cancelBtn btn bold btn-outline-dark my-2 border-bold my-sm-0"
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
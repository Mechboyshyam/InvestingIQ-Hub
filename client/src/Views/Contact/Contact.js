import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <form action="/action_page.php">
            <label for="fname">Your Name :</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Email id :</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="subject">What can we help you with?</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something..."
            ></textarea>

            <button className="btn btn-success" type="button" h > Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

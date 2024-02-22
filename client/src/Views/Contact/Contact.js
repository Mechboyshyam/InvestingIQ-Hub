import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div class="parent1 col-8">
          <form action="/action_page.php">
            <label for="fname">Your Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Email id</label>
            <input
              type="email"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />

            <label for="subject">How can we help you?</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

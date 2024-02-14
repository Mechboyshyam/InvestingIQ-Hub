import React, { PureComponent } from 'react';
import Navbar from '../../Component/Navbar/Navbar';

export class About extends PureComponent {
  render() {
    return (
      <div><Navbar/> <hr />
        This is my about page.
      </div>
    )
  }
}

export default About

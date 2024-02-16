import React, { PureComponent } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './Page1.css';

export class Page1 extends PureComponent {
  render() {
    return (
      <div><Navbar/> <hr />
       <div className="container">
        <h1 className="text-center title">
          Here is my title... please read cerefully.
        </h1>
       </div>
      </div>
    )
  }
}

export default Page1

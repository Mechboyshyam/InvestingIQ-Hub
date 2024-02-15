import React, { PureComponent } from 'react';
import Navbar from '../../Component/Navbar/Navbar';

export class Page1 extends PureComponent {
  render() {
    return (
      <div><Navbar/> <hr />
       <div className='text-center'> I think I'm visible to you!</div>
      </div>
    )
  }
}

export default Page1

import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="navbar">
        <Link to={'/'}>
          <div id="logo">YJ</div>
        </Link>
        <nav>
          <li><HashLink to={'/#portfolio'}>WORK</HashLink></li>
          <li><HashLink to={'/#about'}>ABOUT</HashLink></li>
          <li><a href="https://drive.google.com/file/d/1m4uSZE__q5iDSYe9XhtaCH16rljlH1go">RESUME</a></li>
          <li><HashLink to={'/#contact'}>CONTACT</HashLink></li>
        </nav>
      </div>
    )
  }
}

export default NavBar
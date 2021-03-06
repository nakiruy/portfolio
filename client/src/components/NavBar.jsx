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
          <li><a href="https://drive.google.com/file/d/1BFVRhbwHr4rAcKRh8kM8uteZXV3wg5Qv/">RESUME</a></li>
        </nav>
      </div>
    )
  }
}

export default NavBar
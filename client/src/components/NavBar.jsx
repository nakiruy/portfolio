import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="navBar">
        <div id="logo">YJ</div>
        <nav>
          <li><a href="">Portfolio</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Contact</a></li>
        </nav>
      </div>
    )
  }
}

export default NavBar
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
      <div className="navbar">
        <div id="logo">YJ</div>
        <nav>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://drive.google.com/file/d/1fuKg2XKj56TqhvQHxgZbZ-oWHtVIc1ec">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </nav>
      </div>
    )
  }
}

export default NavBar
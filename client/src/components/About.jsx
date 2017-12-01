import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="subtitle" id="about">
      <div className="triangle2"></div>
        <div className="rectangle" id="bg-about">
          <h5 id="about-title">ABOUT</h5>
          <h1 id="about-description">Hi there! I'm Yurika.</h1>
          <p id="about-description">Ello</p>
        </div>
      </div>
    )
  }
}

export default About
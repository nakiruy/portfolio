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
          <h2 className="about-description">Hi there! I'm Yurika.</h2>
          <p className="about-description">Ello</p>
        </div>
      </div>
    )
  }
}

export default About
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
        <div className="parallelogram" id="bg-about">
          <h5 id="about-title">ABOUT</h5>
        </div>
      </div>
    )
  }
}

export default About
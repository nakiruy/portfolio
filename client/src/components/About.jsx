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
        <div className="rectangle" id="bg-about">
          <h5 id="about-title">ABOUT</h5>
          <div className="about-description">
            <h2>Hi there! I'm Yurika.</h2>
            <h2>I'm a Front-End Developer & UI/UX Designer located in San Francisco Bay Area.</h2>
            <h2>I love creating applications that are thoughtful in design and efficient in its implementation.</h2>
            <h2>With my background in Cognitive Science from UC Berkeley and experience building applications,</h2>
            <h2>My goal is to craft intuitive user experiences for clients and be the bridge between designers and engineers.</h2>
            <h2>In my spare time, I obsess over sneakers (Adidas ftw!) and perfecting the science of making cold brew.</h2>
            </div>
        </div>
      </div>
    )
  }
}

export default About
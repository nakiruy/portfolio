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
          <div className="about-description">
            <h2>Hi there! I'm Yurika.</h2>
            <h3>I love creating applications that make a positive impact on people and their daily lives.</h3>
            <h3>With my background in Cognitive Science and experience in building full-stack applications,</h3>
            <h3>I hope to integrate users with technology by utilizing my academic background and bridge them through my technical abilities.</h3>
            <h3>I would love to join a team of engineers where we can tackle technical challenges and create user experiences that are both intuitive as well as efficient in its implementation.</h3>
            <h3>Please touch base with me if you know of such a team!</h3>
            </div>
        </div>
      </div>
    )
  }
}

export default About
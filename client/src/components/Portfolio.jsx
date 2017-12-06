import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="subtitle" id="portfolio">
        <div className="triangle1"></div>
        <div className="rectangle" id="bg-portfolio">
          <h5 id="portfolio-title">PORTFOLIO</h5>
          <div className="portfolio-img">
            <div className="square" id="proj1" >
            <a href="https://buzzhappyhour.herokuapp.com/">
              <img className="projectImages" src="./assets/buzz.png" alt=""/>
            </a>
            </div>
            <div className="square" id="proj2">
            <a href="https://face2faceapp.herokuapp.com/">
              <img className="projectImages" src="./assets/face2face.png" alt=""/>
            </a>
            </div>

            <div className="square" id="proj3">
              <img className="projectImages" src="./assets/3scan.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
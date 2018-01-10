import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="subtitle" id="portfolio">
        <div className="rectangle" id="bg-portfolio">
          <h5 id="portfolio-title">PORTFOLIO</h5>

          <div className="portfolio-img">
            <a href="https://buzzhappyhour.herokuapp.com/">
              <div className="square" id="proj1" >
                <img className="projectImages" src="./assets/buzz.png" alt=""/>
              </div>
            </a>

            <a href="https://face2faceapp.herokuapp.com/">
              <div className="square" id="proj2">
                <img className="projectImages" src="./assets/face2face.png" alt=""/>
              </div>
            </a>

            {/* <Link to={'/threescan'}> */}
              <div className="square" id="proj3">
                <img className="projectImages" src="./assets/3scan.png" alt=""/>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
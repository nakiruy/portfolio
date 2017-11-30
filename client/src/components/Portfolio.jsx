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
            <div className="square" id="proj1"></div>
            <div className="square" id="proj2"></div>
            <div className="square" id="proj3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import Headline from './Headline';

class ThreeScanRedesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <div className="project-description">
            <h1 className="project-title">3Scan Landing Page Redesign</h1>
            <h2 className="project-subtitles">Overview</h2>
              <h3 className="project-details">
                3Scan is a digital pathology company that offers to redesign the microscopy workflow to build 3D reconstructions analysis of anatomical tissues 
                to give insights to diseases such as cancer, vascular disorders, and Alzheimer's. However, in my perspective, 3Scan's website does not convey 
                the mission of the company and I decided to take an independent initiative to design and construct their landing page. 
                My goal: to pique the interest of the viewers and intrigue visitors to explore the company's mission further.
              </h3>
            <h2 className="project-subtitles">Problems</h2>
              <h3 className="project-details">
                My initial impression of the website was that 
              </h3>
            <h2 className="project-subtitles">Research</h2>
            <h2 className="project-subtitles">Process</h2>
            <h2 className="project-subtitles">Solution</h2>
            <h2 className="project-subtitles">Other Considerations</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeScanRedesign
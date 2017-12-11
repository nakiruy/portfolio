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
        <div className="project-title">
          <h1>3Scan Redesign</h1>
          <h2>Overview</h2>
            <h3>3Scan is a digital pathology company that offers to </h3>
          <h2>Problems</h2>
          <h2>Research</h2>
          <h2>Process</h2>
          <h2>Solution</h2>
          <h2>Other Considerations</h2>
        </div>
      </div>
    )
  }
}

export default ThreeScanRedesign
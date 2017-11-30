import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer">
        <h6 id="copyright">Made with 💕 by Yurika</h6>
        <h6 id="credit">Icons by Dave Gandy @ Flat Icon</h6>
      </div>
    )
  }
}

export default Footer
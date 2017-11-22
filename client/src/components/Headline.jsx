import React from 'react';
import ReactDOM from 'react-dom';

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="headline">
        <h3>Yurika Jacobsson</h3>
        <h4>I design & code with an emphasis on UX</h4>
      </div>
    )
  }
}

export default Headline
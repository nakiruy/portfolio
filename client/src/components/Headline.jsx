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
        <h1>Yurika Jacobsson</h1>
        <h3>I design & code with an emphasis on UX</h3>
      </div>
    )
  }
}

export default Headline
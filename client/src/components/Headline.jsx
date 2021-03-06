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
      <div className="subtitle" id="header">
        <h1 id="name">Yurika Jacobsson</h1>
        <div className="line"></div>
        <h3 id="headline">I design & code with an emphasis on UX</h3>
      </div>
    )
  }
}

export default Headline
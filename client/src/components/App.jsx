import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App
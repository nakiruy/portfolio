import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import Headline from './Headline';
import ContactButton from './ContactButton';

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
        <Headline />
        <ContactButton />
      </div>
    )
  }
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import Headline from './Headline';
import ContactButton from './ContactButton';
import Contact from './Contact';

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
        <Contact />
      </div>
    )
  }
}

export default App
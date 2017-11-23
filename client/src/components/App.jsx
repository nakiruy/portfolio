import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import Headline from './Headline';
import Portfolio from './Portfolio';
import About from './About';
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
        <Portfolio />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App
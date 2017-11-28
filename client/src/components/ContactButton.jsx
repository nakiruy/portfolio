import React from 'react';
import ReactDOM from 'react-dom';

class ContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleClick = () => {
      console.log('this has been clicked');
    }
  }

  render() {
    return (
      <div id="contact-button">
        <button onClick={this.handleClick}>LET'S CONNECT 👋</button>
      </div>
    )
  }
}

export default ContactButton
import React from 'react';
import ReactDOM from 'react-dom';

class ContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="contact-button">
        <button>Let's Connect 👋</button>
      </div>
    )
  }
}

export default ContactButton
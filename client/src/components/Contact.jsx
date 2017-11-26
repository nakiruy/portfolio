import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="contact">
        <h5>CONTACT</h5>
        <a href="https://www.instagram.com/yurikaffeine/">
          <img className="image" src="./assets/instagram.png" alt="Instagram" /></a>
        <a href="https://github.com/nakiruy">
          <img className="image" src="./assets/github.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/yurikajacobsson/">
          <img className="image" src="./assets/linkedin.png" alt="LinkedIn" /></a>
        <a href="mailto:nakiruy@gmail.com">
          <img className="image" src="./assets/email.png" alt="Email" /></a>
      </div>
    )
  }
}

export default Contact
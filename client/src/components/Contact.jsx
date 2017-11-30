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
      <div className="subtitle" id="contact">
        <div className="triangle1"></div>
        <div className="rectangle" id="bg-contact">
          <div className="social-media">
            <h5 id="contact-title">CONTACT</h5>
            <a href="https://www.instagram.com/yurikaffeine/">
              <img className="contact-icon" src="./assets/instagram.png" alt="Instagram" /></a>
            <a href="https://github.com/nakiruy">
              <img className="contact-icon" src="./assets/github.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/yurikajacobsson/">
              <img className="contact-icon" src="./assets/linkedin.png" alt="LinkedIn" /></a>
            <a href="mailto:nakiruy@gmail.com">
              <img className="contact-icon" src="./assets/email.png" alt="Email" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
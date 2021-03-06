import React from 'react';
import "./style.css"
import linked from"./in.png"
import face from"./face.png"
import insta from"./insta.png"
import twitter from"./twitter.png"
import axios from 'axios';
class Footer extends React.Component {
state = {
    senderName:'',
    senderEmail:'',
    senderMessage:''
}

handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const{senderName,senderEmail,senderMessage} = this.state;
   console.log(senderName, senderEmail, senderMessage);
   axios.post('http://localhost:4000/Contact', {
    senderName : senderName,
    senderEmail : senderEmail,
    senderMessage :senderMessage,
   })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}
render(){    
    return (
        <div className="Footer__div">
        <div className="contact">
          <div className="cotainer">
            <div className="info">
              <h2>CONTACT US</h2>
              <p>Tell us what you need and we will contact with you later</p>
              <address>578 Jalaa st. Gaza Remal Area</address>
              <p>
                <strong>Email: </strong>BookFinder@gmail.com<br/>
                <strong>Phone: </strong>+970596178618<br/>
              </p>
            </div>
      
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <label>Name * </label>
                <input
                  name="senderName"
                  type="text"
                  onChange={this.handleChange}
                ></input>
                <label>Email Adress </label>
                <input
                  name="senderEmail"
                  type="email"
                  onChange={this.handleChange}
                ></input>
                <label>Message </label>
                <textarea
                  name="senderMessage"
                  onChange={this.handleChange}
                ></textarea>
                <input id="submit" type="submit" value="Send The Message" />
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <span>Copyright &copy; 2020 BOOKFinder</span>
            <ul>
              <li>
                <img src={face} alt="face icon" />
              </li>
              <li>
                <img src={insta} alt="instgram icon" />
              </li>
              <li>
                <img src={twitter} alt="twitter icon" />
              </li>
              <li>
                <img src={linked} alt="linkedin icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

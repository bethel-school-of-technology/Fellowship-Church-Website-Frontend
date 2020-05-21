import React from 'react';
import '../styles/Chat-style.css';
import { render } from '@testing-library/react';


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A message was submitted: ' + this.state.value);
        event.preventDefault();
      }
      render() {
        return(
            <div> 
              <h2>Need to talk</h2><br/>
              <p>Just type a message and submit!</p>
              <form className="form-container" onSubmit={this.handleSubmit} >
                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type Message.." value={this.state.value} onChange={this.handleChange} name="msg" required></textarea>
                <input type="submit" value="Submit" />
                
              </form>
            </div>
        );
     }
}
export default Chat;
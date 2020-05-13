import React from 'react';
import '../styles/Login.css';
import { Link } from "react-router-dom";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

        handleChange(event) {
            this.setState({value: event.target.value});
          }
        
          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
          }


    render(){
        return(
        <form className='loginForm'   onSubmit={this.handleSubmit}>
            Username: <input type='text' value={this.state.value} id='username' onChange={this.handleChange} />
            <br/>
            Password: <input type='text' id='password' />
            <br/>
            <input type='submit' className='loginbtn' value='Log In'  />
            {/* The above should GET a response from the server and use auth to verify username and password. Need to figure out how to make my button do that. */}
            <br/>
            <p>New member? Click <a className='signup' href='/signup'>here</a> to join the fellowship!</p>
            <Link to="/login/reset">Forgot password?</Link>
        </form>
        );
    }
}

export default Login; 
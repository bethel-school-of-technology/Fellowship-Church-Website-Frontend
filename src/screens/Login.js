import React from 'react';
import '../styles/Login.css';
import { Link } from "react-router-dom";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={username: '', password: ''};

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


        
          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();

            fetch('https://localhost:3005/user/login',{
                method: "POST",
                body: JSON.stringify({username: this.state.username, password: this.state.password})
            }).then(data =>{
                console.log(data)
            })
          }


    render(){
        return(
        <form className='loginForm' method='GET'   onSubmit={this.handleSubmit}>
            <label for='username'>Username: </label>
            <input type='text' name='username' value={this.state.value} id='username' onChange={(e) => this.setState({username:  e.target.value})} />
            <br/>
            <label for='password'>Password: </label>
            <input type='text' name='password' id='password' onChange={(e) => this.setState({password:  e.target.value})} />
            <br/>
            <input type='submit' className='loginbtn' value='Log In'  />
            <br/>
            <p>New member? Click <a className='signup' href='/signup'>here</a> to join the fellowship!</p>
            <Link to="/login/reset">Forgot password?</Link>
            
        </form>
        );
    }
}

export default Login; 
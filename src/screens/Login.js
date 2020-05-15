import React from 'react';
import '../styles/Login.css';


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
        <form className='loginForm' method='GET'   onSubmit={this.handleSubmit}>
            <label for='username'>Username: </label>
            <input type='text' name='username' value={this.state.value} id='username' onChange={this.handleChange} />
            <br/>
            <label for='password'>Password: </label>
            <input type='text' name='password' id='password' />
            <br/>
            <input type='submit' className='loginbtn' value='Log In'  />
            <br/>
            <p>New member? Click <a className='signup' href='/signup'>here</a> to join the fellowship!</p>
        </form>
        );
    }
}

export default Login; 
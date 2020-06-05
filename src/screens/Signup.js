import React, { useState } from 'react';
import '../styles/Signup.css';
import '../forms/Terms-of-Service.pdf'
import Axios from 'axios';

function Signup(){
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    })
            return (
            <div className='mainSignup' id='divId'>
                <form onSubmit={submitHandler.bind(this)}>
                    <p>Please fill out the following information to sign up for an account.</p>
                    <label for='firstName'>First Name: </label>
                    <input className='firstName' id='fname' name='firstName' onChange={changeHandler.bind(this)} required={true} />
                    <br />
                    <label for='lastName'>Last Name: </label>
                    <input id='lname' name='lastName' onChange={changeHandler.bind(this)} required={true} />
                    <br />
                    <label for='email'>Email: </label>
                    <input type='email' id='email' name='email' onChange={changeHandler.bind(this)} required={true} />
                    <br />
                    <label for='username'>Username: </label>
                    <input id='uname' name='username' required={true} onChange={changeHandler.bind(this)} />
                    <br />
                    <label for='password'>Password: </label>
                    <input type='password' id='password' name='password' onChange={changeHandler.bind(this)} required={true} />
                    <br />
                    <input type='checkbox' required='true' className='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
                    <br />
                    <input type='submit' value='Sign Up!' className='signupBtn' />
                    {/* The above button should POST to the database and create a new user. Need to figure out how to make my button do that. */}
                </form>
            </div>
            )

    function changeHandler(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }
    function submitHandler(event) {
        // event.preventDefault();
        alert(state.username + ' was created! Welcome to the fellowship!')
        Axios.post('http://localhost:3000/user/signup', state)
        .then(response => {
            console.log(response);       
         })
         .catch(error => {
             console.log(error)
         })
    }
}

export default Signup;

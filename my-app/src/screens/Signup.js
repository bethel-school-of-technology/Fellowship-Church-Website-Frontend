import React from 'react';
import '../styles/Signup.css';
import '../forms/Terms-of-Service.pdf'

const Signup = () => (
    <div class='mainSignup'>
        <form>
            <p>Please fill out the following information to sign up for an account.</p>
        First Name:<input id='fname' />
        <br/>
        Last Name:<input id='lname' />
        <br/>
        Email:<input id='email' />
        <br/>
        <input type='checkbox' class='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
        <br/>
        <button class='signupBtn' onClick='console.log'>Sign Up!</button>
        </form>
    </div>
)

export default Signup;
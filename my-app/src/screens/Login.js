import React from 'react';
import '../styles/Login.css';

const Login = () => (
    <div class='formContainer'>
        <form class='loginForm'>
            Username: <input id='username' />
            <br/>
            Password: <input id='password' />
            <br/>
            <button class='loginbtn' onClick='console.log(alert("Hi my name was sent"))'>Login</button> 
            <br/>
        </form>
        <p>New member? Click <a class='signup' href='/signup'>here</a> to join the fellowship!</p>
    </div>
)

export default Login; 
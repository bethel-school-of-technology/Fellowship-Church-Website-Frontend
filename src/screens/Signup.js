import React from 'react';
import '../styles/Signup.css';
import '../forms/Terms-of-Service.pdf'

// const Signup = () => (


//     <div class='mainSignup' id='divId'>
//         <form >
//             <p>Please fill out the following information to sign up for an account.</p>
//         First Name:<input id='fname' />
//         <br/>
//         Last Name:<input id='lname' />
//         <br/>
//         Email:<input id='email'  />
//         <br/>
//         Username:<input id='uname' />
//         <br/>
//         Password:<input id='password' />
//         <br/>
//         <input type='checkbox' class='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
//         <br/>
//         <button class='signupBtn' >Sign Up!</button>
//                     {/* The above button should POST to the database and create a new user. Need to figure out how to make my button do that. */}
//         </form>
//     </div>
// )


// export default Signup;

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value + ' was created!');
        event.preventDefault();
    }
    render() {
        return (
            <div className='mainSignup' id='divId'>
                <form onSubmit={this.handleSubmit}>
                    <p>Please fill out the following information to sign up for an account.</p>
        First Name:<input id='fname' required='true'/>
                    <br />
        Last Name:<input id='lname' required='true'/>
                    <br />
        Email:<input id='email' required='true'/>
                    <br />
        Username:<input id='uname' required='true'  onChange={this.handleChange} />
                    <br />
        Password:<input id='password' required='true'/>
                    <br />
                    <input type='checkbox' required='true' className='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
                    <br />
                    <input type='submit' value='Sign Up!' className='signupBtn' />
                    {/* The above button should POST to the database and create a new user. Need to figure out how to make my button do that. */}
                </form>
            </div>)

    }
}

export default Signup;
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
                <form method='POST' onSubmit={this.handleSubmit}>
                    <p>Please fill out the following information to sign up for an account.</p>
                    <label for='first_name'>First Name: </label>
                    <input id='fname' name='fist_name' required={true} />
                    <br />
                    <label for='last_name'>Last Name: </label>
                    <input id='lname' name='last_name' required={true} />
                    <br />
                    <label for='email'>Email: </label>
                    <input id='email' name='email' required={true} />
                    <br />
                    <label for='username'>Username: </label>
                    <input id='uname' name='username' required={true} onChange={this.handleChange} />
                    <br />
                    <label for='password'>Password: </label>
                    <input id='password' name='password' required={true} />
                    <br />
                    <input type='checkbox' required={true} className='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
                    <br />
                    <input type='submit' value='Sign Up!' className='signupBtn' />
                </form>
            </div>
            )
    }
}

export default Signup;
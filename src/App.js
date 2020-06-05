import React from 'react';
import './App.css';
import './styles/BibleStudyStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import BibleStudy from './screens/BibleStudy';
import Resources from './screens/Resources';
import Home from './screens/Home';
import Ministry from './screens/Ministry';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TermsofService from './screens/TermsofService';
 
import OurStaff from './screens/OurStaff';
import Chat from './screens/Chat';



function App() {
  return (
    <Router>
      <div>
        <header><img src={require('./photos/FellowshipLogo.jpg')} alt='' /></header>
        <ul className='appMain'>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About-Us'>About Us</Link>
          </li>
          <li>
            <Link to='/Contact-Us'>Contact Us</Link>
          </li>
          <li>
            <Link to='/Bible-Study'>Bible Study</Link>
          </li>
          <li>
            <Link to='/Ministry'>Ministry</Link>
          </li>
          <li>
            <Link to='/Resources'>Resources</Link>
          </li>
          <li>
            <Link to='/Our-Staff'>Meet Our Staff</Link>
          </li>
          <li id='Signup'>
            <Link to='/Signup'>Signup</Link>
          </li>
          <li id='Login'>
            <Link to='/Login'>Log In</Link>
          </li>
          <li id='Chat'>
            <Link to='/chat'>Chat</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/About-Us' component={AboutUs} />
        <Route path='/Contact-Us' component={ContactUs} />
        <Route path='/Bible-Study' component={BibleStudy} />
        <Route path='/Ministry' component={Ministry} />
        <Route path='/Resources' component={Resources} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/terms-of-service' component={TermsofService} />

        <Route path='/Our-Staff' component={OurStaff} />

        <Route path='/chat' component={Chat} />
 
      </div>
    </Router>
  );
}


export default App;

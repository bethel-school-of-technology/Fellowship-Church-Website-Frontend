import React from 'react';
import './App.css';
import './styles/BibleStudyStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import BibleStudy from './screens/BibleStudy';
import Resources from './screens/Resources';
import Home from './screens/Home';
import Ministries from './screens/Ministries';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TermsofService from './screens/TermsofService';


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
            <Link to='/Ministries'>Ministries</Link>
          </li>
          <li>
            <Link to='/Resources'>Resources</Link>
          </li>
          <li id='Signup'>
            <Link to='/Signup'>Signup</Link>
          </li>
          <li id='Login'>
            <Link to='/Login'>Log In</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/About-Us' component={AboutUs} />
        <Route path='/Contact-Us' component={ContactUs} />
        <Route path='/Bible-Study' component={BibleStudy} />
        <Route path='/Ministries' component={Ministries} />
        <Route path='/Resources' component={Resources} />
        <Route path='/Login' component={Login} />
        <Route path='/Signup' component={Signup} />
        <Route path='/Terms-of-Service' component={TermsofService} />
      </div>
    </Router>
  );
}

export default App;

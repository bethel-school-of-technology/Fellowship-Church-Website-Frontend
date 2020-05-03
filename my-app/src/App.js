import React from 'react';
import './App.css';
import './styles/BibleStudyStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import BibleStudy from './screens/BibleStudy';
import Resources from './screens/Resources';
import Home from './screens/Home';
import Ministries from './screens/Ministries';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TermsofService from './screens/TermsofService';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaWN5LXF1ZWVuLTAifQ.EMkNGwznbeH11bF5MK8toHCP87YcrBh5BM9WjpY2Z6Q';

const user = {
  id: 'icy-queen-0',
  name: 'Icy queen',
  image:
    'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "icy-queen-0");
    channel.watch();

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

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
          <li id='Login'>
            <Link to='/Login'>Log In</Link>
          </li>
        </ul>
        <ChannelScreen />
        <Route exact path='/' component={Home} />
        <Route path='/About-Us' component={AboutUs} />
        <Route path='/Contact-Us' component={ContactUs} />
        <Route path='/Bible-Study' component={BibleStudy} />
        <Route path='/Ministries' component={Ministries} />
        <Route path='/Resources' component={Resources} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/terms-of-service' component={TermsofService} />
      </div>
    </Router>
    
  );
}

export default App;
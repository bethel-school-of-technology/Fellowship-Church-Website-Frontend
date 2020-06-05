import React from 'react';
import '../styles/Home.css';
import worship from "../images/worship.jpg";
import grown from "../images/grown.jpg"

const Home = () => (
<div class="header">
  <h1>Welcome To Fellowship Churh</h1>

<div class="row">
  <div class="column side">
  <img class="worship" src={worship} alt="worship"></img>
  </div>

  <div class="column middle">
    <h3>Service Times</h3>
    <ul>
        <li>Sunday 9AM</li>
        <li>Sunday 11AM</li>
        <li>Wednesday 7PM</li>
    </ul>
<div>
    <h3>Location</h3>
    <p>1234 Church Road, Redding California</p>
    <p>Click below for MAPQUEST directions!</p>
    <a href="https://www.mapquest.com/near-40.58579947707732,-122.36022949218749?zoom=10" target="_blank">MAPQUEST US!</a>
    

</div>
  </div>

  <div class="column side">
  <img class="grown" src={grown} alt="grown"></img>
  </div>
</div>

<div class="footer">
  <p>Footer</p>
</div>
</div>

)

export default Home;
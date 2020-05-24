import React from 'react';
import srpastors from "../images/srpastors.jpeg";
import associate from "../images/associate.jpg";
import womenspastors from "../images/womenspastors.jpg";
import Flexbox from 'flexbox-react';
import '../styles/OurStaff.css';

const OurStaff = () => (
<div class="container1">
    <div class="box1">
        <h2>Senior Pastors</h2>
        <p id="nametag"> Senior Pastors Keith and Dede Nettles</p>
        <img class="srpastors" src={srpastors} alt="seniorpastors"></img>
        <p id="description">Keith and Dede founded Fellowship Church in 2016. They have been married for 30 years, and have 3 boys.</p>
    </div>
    <div class="box2">
        <h2>Assistant Pastors</h2>
        <p id="nametag">Assistant Pastors Jon and Tannith Brown</p>
        <img className="associate img-fluid" src={associate} alt=""></img>
        <p id="description">Assistant Pastor Jon Brown recieved his Masters degree from Yale Divinity. He has worked under Sr. Pastor Nettles for 3 years. Tannith Brown serves as chior director when she's not busy with dogs, Jacob and Esau.</p>
    </div>
    <div class="box3">
        <h2>Women's Pastors</h2>
        <p id="nametag">Pastor Faye Connaway and Pastor Dede Nettles</p>
        <img className="womenspastors img-fluid" src={womenspastors} alt=""></img>
        <p id="description">Pastors Faye and Dede run a dynamic mynistry for women in the church, and the community. Pastor Faye is the founder of the domestic violence outreach Women in Flight.</p>
        <href>href="https://shepherdsgate.org/"</href>
    </div>
    <div class="footer">
        
    </div>

</div>
)

export default OurStaff;


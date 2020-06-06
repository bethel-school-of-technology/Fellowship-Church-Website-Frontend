import React from 'react';
import srpastors from "../images/srpastors.jpeg";
import associate from "../images/associate.jpg";
import womenspastors from "../images/womenspastors.jpg";
import '../styles/OurStaff.css';


const OurStaff = () => (
<div class="flex-container">
    <div class="box1">
        <h2>Senior Pastors</h2>
        <p id="nametag"> Senior Pastors Keith and Dede Nettles</p>
        <img class="srpastors" src={srpastors} alt="seniorpastors"></img>
        <p id="description">Keith and Dede founded Fellowship Church in 2016. They have been married for 30 years, and have 3 boys. Pastor Keith has a Masters in Communication from Regant University. He attended Rhema Bible School where he was ordained in 1998. </p>
        <a href="https://youtu.be/juCDFnel90E" >Click for Pastor Keith's Favorite Sermon!</a>
    </div>
    <div class="box2">
        <h2>Assistant Pastors</h2>
        <p id="nametag">Assistant Pastors Jon and Tannith Brown</p>
        <img className="associate img-fluid" src={associate} alt=""></img>
        <p id="description">Assistant Pastor Jon Brown recieved his Masters degree from Yale Divinity. He has worked under Sr. Pastor Nettles for 3 years. Tannith Brown serves as choir director when she's not busy with dogs, Jacob and Esau.</p>
        <a href="https://youtu.be/VPpd-6X3tEo">Click to Join the Choir!</a>
    
    </div>
    <div class="box3">
        <h2>Women's Pastors</h2>
        <p id="nametag">Pastor Faye Connaway and Pastor Dede Nettles</p>
        <img className="womenspastors img-fluid" src={womenspastors} alt=""></img>
        <p id="description">Pastors Faye and Dede run a dynamic mynistry for women in the church, and the community. Pastor Faye is the founder of the domestic violence outreach Shepherd's Gate which serves women and children in our community.</p>
        <a href="http://www.shepherdsgate.org">Click for Shepherd's Gate Information!</a>
    </div>


    <div class="footer">
    <a id="social" href="http://facebook.com/keith.nettles.3">FRIEND US ON FACEBOOK</a>
    <a id="social" href="http://instagram.com">FOLLOW US ON INSTAGRAM</a>
    <a id="social" href="http://twitter.com/explore">CHECK OUT OUR TWITTER</a>
    <a id="social" href="mailto:fellowshipchurchproject@gmail.com">EMAIL US</a>
        

    

</div>

</div>
)




export default OurStaff;


import React from 'react';
import srpastors from "../images/srpastors.jpeg";
import associate from "../images/associate.jpg";
import womenspastors from "../images/womenspastors.jpg";
import youngadultpastors from "../images/youngadultpastors.jpg";


const OurStaff = () => (
    <div className='mainContainer'>
        <div className='ourstaff'>
        <h1>Fellowship Church Staff</h1>
        </div>

        <h2>Senior Pastors</h2>
        <div className='srpastors'>
        <p id='nameTag'>Sr. Pastors Keith and Dede Nettles</p>
        <img className="srpastors img-fluid" src={srpastors} alt="Senior-Pastors"></img>
         <p id="description">Pastor Keith Nettles has been the Senior Pastor of Fellowship Church for 10 years.</p>
        </div>

        <h2>Associate Pastors</h2>
        <div className='associatepastors'>
        <p id='nameTag'>Associate Pastors Jon and Tannith Brown</p>
        <img className="associate img-fluid" src={associate} alt="Associate-Pastors"></img>
        <p id="description">Assocaite Pastor Jon Brown recieved his Masters degree from Yale Divinity and has worked under Sr. Pastor Nettles for 3 years.</p>
        </div>

        <h2>Women's Ministry Pastor</h2>
        <div className='womenspastors'>
        <p id='nameTag'>Women's Pastors Dede Nettles, and Faye Connaway</p>
        <img className="womenspastors img-fluid" src={womenspastors} alt="Womens-Pastors"></img>
        <p id="description">Co-Pastors Faye Connaway, and Dede Nettles head the women's ministry.</p>
        </div>

        <h2>Children and Young Adults Pastors</h2>
        <div className='youngadultpastors'>
        <p id='nameTag'>Pastor Eddie Devala and his wife Desi serve our children, youth, and young adults.</p>
        <img className="youngadultpastors img-fluid" src={youngadultpastors} alt="Youth-Pastors"></img>
        <p id="description">Pastor Eddie Devala and his wife Desi have served the children, youth, and young adults of fellowship church for 8 years.</p>
        </div>

        


    </div>
    )

    export default OurStaff;
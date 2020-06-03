import React from 'react';


const Navigation = ({title}) => (
    <nav>
        <a href='/'>Home</a>
        <a href='/About-Us'>About Us</a>
        <a href='/Bible-Study'>Bible Study</a>
        <a href='/Resources'>Resources</a>
        <a href='/Contact-Us'>Contact Us</a>
        <a href='/Ministries'>Ministries</a>
        <a href='/Our-Staff' >Meet The Team</a>
        <h1>{title}</h1>
    </nav>
)


export default Navigation;
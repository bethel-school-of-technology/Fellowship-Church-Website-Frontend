import React from 'react';
import '../components/chat-script.js';
import '../styles/Chat-style.css';
import { render } from '@testing-library/react';


const Chat = () => (
    
    function openForm(){
        document.getElementById("myForm").style.display = "block";
    },
    
    function closeForm(){
        document.getElementById("myForm").style.display = "none";
    },

    render (
        <div> 
            <h2>Popup Chat Room</h2>
            <h3>Click on the button at the bottom of this page to open the chat form.</h3>

            <button className="open-button" onClick={openForm()}>Chat</button>
            <div  className="chat-popup" id="myForm">
                <form action="/action_page.php"  className="form-container">
                    <h1>Chat</h1>

                    <label for="msg"><b>Message</b></label>
                    <textarea placeholder="Type Message.." name="msg" required></textarea>

                    <button type="submit"  className="btn">Send</button>
                    <button type="button"  className="btn cancel" onClick={closeForm()}>Close</button>
                </form>
            </div>
        </div>
    )
);
export default Chat;
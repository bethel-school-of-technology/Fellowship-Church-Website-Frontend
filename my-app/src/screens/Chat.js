import React from 'react';

var ChatPopUp = React.createClass({
    render: function() {
      return (
        <div>
          <link rel="stylesheet" href="chat-style.css" />
          <h2>Popup Chat Room</h2>
          <p>Click on the button at the bottom of this page to open the chat form.</p>
          <button className="open-button" onclick="openForm()">Chat</button>
          <div className="chat-popup" id="myForm">
            <form action="/action_page.php" className="form-container">
              <h1>Chat</h1>
              <label htmlFor="msg"><b>Message</b></label>
              <textarea placeholder="Type Message.." name="msg" required defaultValue={""} />
              <button type="submit" className="btn">Send</button>
              <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
            </form>
            </div>
      </div>
    );
  }
});
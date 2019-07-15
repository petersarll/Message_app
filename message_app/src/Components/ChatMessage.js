  // src/Components/ChatMessage.js
  import React, { Component } from 'react';

export default class ChatMessage extends Component {
  constructor(props) {
    super(props);
        this.changeView = this.changeView.bind(this);
  }
    changeView() {
        this.props.changeView('signup')
    }
      render() {
        return (
            <div>
                <button className="chat-button" onClick={this.changeView}>Send a message</button>
            </div>
        )
    }
}

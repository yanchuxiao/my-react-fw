import React, { Component } from 'react';

class Message extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    render() {
        return (
            <div>消息页</div>
        )
    }
}

export default Message

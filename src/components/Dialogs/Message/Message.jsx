import React from 'react';
import classes from './Message.module.css';

const Message = ({messageTimeCounter, ...props}) => {
    return (
        <div className={classes.message}>
            <span className={classes.messageTime}>{messageTimeCounter()}</span>{props.message}
        </div>
    )
}

export default Message;
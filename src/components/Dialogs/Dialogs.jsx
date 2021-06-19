import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    let messageTimeCounter = () => {
            let date = new Date();
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        }

    let dialogsElements = state.dialogs
        .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = state.messages
        .map( message => <Message message={message.message}
                                  key={message.id}
                                  id={message.id}
                                  messageTimeCounter={messageTimeCounter} />);
    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
       <div>
           <div className={classes.dialogs}>
               <div className={classes.dialogsItems}>
                   {dialogsElements}
               </div>
               <div className={classes.messages}>
                   <div>{messagesElements}</div>
                   <AddMessageForm onSubmit={addNewMessage} />
               </div>
           </div>
       </div>
    )
}

export default Dialogs;
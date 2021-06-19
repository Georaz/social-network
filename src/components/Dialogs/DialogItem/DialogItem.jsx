import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../../images/avatar.png';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <img src={avatar} width="60" height="60" alt="" />
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
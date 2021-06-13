import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/gr.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={logo} width="100" height="75" alt="" />
            <div className={classes.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;
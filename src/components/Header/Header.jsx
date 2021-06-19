import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/grn.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logoWrapper}>
                <img src={logo} alt=""/>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}&#8195;
                        <button className={classes.logOut} onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink className={classes.logIn} to={'/login'}>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header;
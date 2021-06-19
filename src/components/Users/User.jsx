import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../images/userAvatar.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.user}>
            <div className={classes.userLinkPhotoWrapper}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={classes.userPhoto}
                             width="100" height="102" alt=""/>
                    </NavLink>
                </div>
                <div className={classes.followUnfollowWrapper}>
                    {user.followed
                        ? <button className={classes.followUnfollowButton} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}
                        >Unfollow</button>

                        : <button className={classes.followUnfollowButton} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}
                        >Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div className={classes.userName}>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </div>
                <div>
                    <div>
                        {'user.location.country'}
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../images/avatar.png';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={avatar} width="60" height="60" alt="" />
                {props.message}
            <div>
                <span>likes: </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../images/avatarufo.png';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.serviceInfoWrapper}>
            <img src={props.photos || avatar} width="60" height="60" alt=""/>
            <div className={classes.likeWrapper}>
                <button className={classes.likeButton}>
                    <svg className={classes.like} width="21" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.969 5.771c-.278-2.765-2.438-4.77-5.142-4.77-1.802 0-3.451.877-4.38 2.285C9.527 1.86 7.947 1 6.173 1 3.47 1 1.31 3.006 1.032 5.77c-.022.123-.112.766.161 1.814.394 1.511 1.304 2.887 2.63 3.975L10.444 17l6.733-5.44c1.327-1.09 2.237-2.464 2.63-3.976.274-1.048.184-1.69.163-1.813zm-.874 1.661c-.36 1.38-1.193 2.639-2.408 3.636l-6.24 5.042-6.132-5.041c-1.217-.999-2.05-2.256-2.41-3.637-.259-.992-.153-1.552-.152-1.556l.005-.033c.238-2.423 2.094-4.181 4.415-4.181 1.713 0 3.22.953 3.936 2.487l.337.723.336-.723c.704-1.51 2.292-2.487 4.045-2.487 2.32 0 4.178 1.759 4.42 4.212 0 .006.107.566-.152 1.558z"
                            fill="#fff" stroke="#fff" strokeWidth=".75"/>
                    </svg>
                </button>
                {props.likesCount}
            </div>
            </div>
            <div className={classes.postText}>
                {props.message}
            </div>
        </div>
    )
}

export default Post;
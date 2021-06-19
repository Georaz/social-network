import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id}
                                                      message={post.message}
                                                      likesCount={post.likesCount}
                                                      id={post.id}
                                                      photo={post.photos}
    />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsWrapper}>
            <h2>My posts</h2>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.textarea} name="newPostText" component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button className={classes.addPostButton}>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
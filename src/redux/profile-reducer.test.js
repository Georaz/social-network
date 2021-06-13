import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Guten Tag!', likesCount: 15},
        {id: 2, message: 'Das ist mein zweiter Post.', likesCount: 20}
    ]
};

it('Length of posts should be incremented', () => {
    let action = addPostActionCreator("GR-social-network");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('New post message should be GR-social-network', () => {
    let action = addPostActionCreator("GR-social-network");
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe("GR-social-network");
});

it('After deleting length of an array should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

it("After deleting length shouldn't be decremented id id is not correct", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});





import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Guten Tag!', likesCount: 15},
                {id: 1, message: 'Das ist mein zweiter Post.', likesCount: 20}
            ],
            newPostText: 'gr-network'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hallo'},
                {id: 1, message: 'Was ist das?'},
                {id: 1, message: 'Willkommen'}
            ],
            dialogs: [
                {id: 1, name: 'George'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Nick'},
                {id: 4, name: 'Julia'},
                {id: 5, name: 'Alex'}
            ],
            newMessageBody: ''
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
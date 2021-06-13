const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
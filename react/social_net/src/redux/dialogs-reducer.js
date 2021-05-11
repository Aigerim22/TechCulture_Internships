const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Aigerim" },
        { id: 2, name: "Aida" },
        { id: 3, name: "Nurly" },
        { id: 4, name: "Akerke" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi! How are u?" },
        { id: 3, message: "Good" },
        { id: 4, message: "What are u doing?" },
      ],
      newMessageBody: "",
}


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;

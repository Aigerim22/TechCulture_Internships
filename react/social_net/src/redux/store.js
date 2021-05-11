import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?!", likesCount: 12 },
        { id: 2, message: "It's my first post!!!!", likesCount: 11 },
      ],
      newPostText: "blablabla",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};





export default store;
window.store = store;

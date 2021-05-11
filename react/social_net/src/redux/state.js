const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;

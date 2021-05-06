let rerenderTree = () => {
  console.log("state changed");
};
let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export const subscribe = (observer) => {
  rerenderTree = observer;
};
export default state;

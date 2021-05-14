const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],

  // users: [
  //   // {
  //   //         id: 1,
  //   //         photoUrl:
  //   //           "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkVwz27GAcDQjKnJW1I6zsc6aKTM5SRkZCeTgDn6uOyic",
  //   //         followed: false,
  //   //         fullName: "Aigerim T",
  //   //         status: "No status",
  //   //         location: { city: "Taraz", country: "Kazakhstan" },
  //   //       },
  //       ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: UNFOLLOW, users });

export default usersReducer;

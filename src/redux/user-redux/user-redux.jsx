import { UserActionTypes } from './user-types';
const INITIAL_STATE = {
  currentUser: null,
};

//reducer is a function which takes two parameters state and action
//and if the action.type is match with SET_CURRENT_USER than it return new object out of the reducer
// ..state its a spread operator to clone the initial state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;

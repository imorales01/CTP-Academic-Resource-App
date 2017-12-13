/******************************************************************************
Title           : userReducer.js
Author          : Academic Resources App
Description     : remplace user information with a new information
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import { LOGIN, LOGOUT } from "./userActions";


const _defaultState = {
  user: null
}

//remplace user with a new user
const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case LOGIN:
    console.log('LOGIN ===', action.user)
      return {
        user: action.user
      }

    case LOGOUT:
      return ({
        user: null
      })

    default:
      return oldState;
  }
}

export default reducer;








 
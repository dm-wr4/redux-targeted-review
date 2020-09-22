// Initial state - what our redux store keeps track of
const initialState = {
  name: '',
  image: '',
}

// Action constants
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

// Action creators (dispatch actions)
export function loginUser(name, image) {
  return {
    type: LOGIN_USER,
    payload: { name, image },
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  }
}

// Reducer function - actually changes redux state.  What is returned from this function is the new value of our redux state
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      }
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}

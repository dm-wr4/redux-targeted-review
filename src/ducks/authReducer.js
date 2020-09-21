const initialState = {
  name: '',
  image: '',
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (name, image) => {
  return {
    type: LOGIN_USER,
    payload: { name, image },
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: initialState,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload }
    case LOGOUT_USER:
      return { ...state, ...action.payload }
    default:
      return initialState
  }
}

const initialState = {
  isDarkMode: false,
}

const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode }
    default:
      return initialState
  }
}

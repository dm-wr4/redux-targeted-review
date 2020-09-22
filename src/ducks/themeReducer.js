// Initial state - what is being tracked in redux
const initialState = {
  isDarkMode: false,
}

// Action constants - what actions can be dispatched
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

// Action creators (dispatch actions) - The function to be called to dispatch a specific action
export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  }
}

// Reducer function - how redux state is actually changed
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode }
    default:
      return state
  }
}

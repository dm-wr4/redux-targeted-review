import { createStore, combineReducers } from 'redux'
import authReducer from './ducks/authReducer'
import themeReducer from './ducks/themeReducer'

const baseReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
})

export default createStore(baseReducer)

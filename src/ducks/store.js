import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import themeReducer from './themeReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
})

export default createStore(rootReducer, devToolsEnhancer())

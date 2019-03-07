import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: require('./Posts').reducer,
})

export default rootReducer

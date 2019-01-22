import { combineReducers } from 'redux'
import { todos, loading } from './reducers'

export default combineReducers({
  todos,
  loading
})

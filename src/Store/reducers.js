export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_TODO = 'ADD_TODO'

// ------------- ToDos Reducer --------------- //

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case RECEIVE_DATA :
      return action.todos
    default :
      return state
  }
}

// ------------- Loading Reducer --------------- //

export function loading (state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA :
      return false
    default :
      return state
  }
}
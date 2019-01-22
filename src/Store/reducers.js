export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// ------------- ToDos Reducer --------------- //

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
      return state.map((todo) => todo.id !== action.id ? todo
        : Object.assign({}, todo, { complete: !todo.complete }))
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
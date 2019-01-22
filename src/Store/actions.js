import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_TODO = 'ADD_TODO'

// ------------- Initial Actions --------------- //

function receiveData (todos) {
  return {
    type: RECEIVE_DATA,
    todos
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos()
    ]).then(([ todos ]) => {
      dispatch(receiveData(todos))
    })
  }
}

// ------------- ToDo action --------------- //

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function handleAddTodo (name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then(todo => {
        dispatch(addTodo(todo))
        callback()
      })
      .catch(() => {
        alert('There was an error saving the To Do. Try again')
      })
  }
}
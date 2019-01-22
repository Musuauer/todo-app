import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// ------------- Initial Actions --------------- //

function receiveData (todos, goals) {
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

// ------------- ToDo actions --------------- //

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert('Error! Try again')
      }
      )
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
        alert('There was an error.')
      })
  }
}

export function handleToggle (id) {
  return (dispatch) => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id))
        alert('Did not work!')
      })
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../Store/actions'

class Todos extends Component {
  render () {
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAddTodo } from '../Store/actions'
import Todo from './Todo'
import styled from 'styled-components'

const List = styled.ol`
line-height: 2;
margin: 0 auto;
margin-top: 2rem;
`

class Todos extends Component {
  addItem = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => (this.input.value = '')
    ))
  }

  render () {
    const { todos } = this.props

    return (
      <div>

        <h1>Todo List</h1>

        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>

        <List>
          {todos.map((todo, i) => (
            <li key={todo.id}>
              <Link to={{
                pathname: `/todo/${todo.id}`,
                state: {
                  index: i,
                  name: todo.name
                }
              }}
              >
                <Todo
                  name={todo.name}
                />
              </Link>
            </li>
          ))}
        </List>
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)

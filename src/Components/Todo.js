import React from 'react'

const Todo = ({ name, location }) => (
  <div>
    <span>
      {name ||
      (
        <React.Fragment>
          <h1>Todo # {location.state.index + 1}</h1>
          <h2>{location.state.name}</h2>
        </React.Fragment>
      )
      }
    </span>
  </div>
)

export default Todo

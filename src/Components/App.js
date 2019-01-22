import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Store'
import ConnectedTodos from './TodosList'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render () {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <ConnectedTodos />
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

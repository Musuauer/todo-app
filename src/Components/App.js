import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Store/actions'
import ConnectedTodos from './TodosList'
import Todo from './Todo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 30%;
padding: 2rem;
margin: 0 auto;
margin-top: 4rem;
border: 2px solid darkblue;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
`

const Nav = styled.nav`
margin-bottom: 2rem;
`

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
      <Router>
        <Wrapper>
          <Nav>
            <Link to='/'>Back to list</Link>
          </Nav>

          <Route exact path='/' component={ConnectedTodos} />
          <Route path='/todo/:id' component={Todo} />
        </Wrapper>
      </Router>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

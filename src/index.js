import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound1 from './views/not-found'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={NotFound1} />   // manually adjusted
        <Route component={Home} exact path="/" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

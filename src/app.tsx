import React, { useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import './app.css'
import RootRoutes from './root-routes'

// there is no need for redux here with hooks
// redux-saga, middleware calls have been poofed away

// global reducer
import reducer from './root-reducer'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <RootRoutes rootState={state} rootDispatch={dispatch} />
      </div>
    </Router>
  )
}

export default App

import React, { useReducer } from 'react'
import { Route } from 'react-router-dom'
import reducer from './reducer'
import config from './config'

export const Feature: React.FC = (props: any) => {
  const { match } = props
  const moduleName = config.name
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <div className="full-height">
      {config.routes.map(route => {
        const Component = route.component
        return <Route
          key={route.path}
          path={`${match.url}/${route.path}`}
          component={Component}
          moduleName={moduleName}
          state={state}
          dispatch={dispatch}
          {...props}
        />
      })}
    </div>
  )
}

export default Feature

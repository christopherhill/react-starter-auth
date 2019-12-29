import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NotFound } from './pages/errors/not-found'
import { Unauthorized } from './pages/errors/unauthorized'

import FeatureA from './feature-a'

const Routes: any = (props: any) => (
  <Switch>
    <Redirect exact path="/" to="/authentication" />
    <Route path="/unauthorized" component={Unauthorized} {...props} />
    <Route path="/feature-a" component={FeatureA} {...props} />
    <Route component={NotFound} {...props} />
  </Switch>
)

export default Routes

import React from 'react'
import { Route } from 'react-router-dom'

import PropTypes from 'prop-types'

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function SubRoute(route) {
  console.log(route)
  return (
    <Route
      path={route.path}
      render={(route) => (
        // pass the sub-routes down to keep nesting
        <route.component {...route} routes={route.routes} />
      )}
    />
  )
}

SubRoute.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    exact: PropTypes.bool,
    title: PropTypes.string,
    component: PropTypes.string,
  }).isRequired,
}

export default SubRoute

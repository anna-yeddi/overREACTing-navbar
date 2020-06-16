import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Menu(props) {
  const { routes } = props

  return (
    <nav className="menu">
      {routes.map((route, i) => (
        <NavLink
          key={i}
          className="menu__item"
          to={route.path}
          exact={route.exact}
          activeClassName={'menu__item-active'}
          aria-current="page">
          {route.title}
        </NavLink>
      ))}
    </nav>
  )
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      exact: PropTypes.bool,
      title: PropTypes.string,
      component: PropTypes.func,
    })
  ).isRequired,
}

export default Menu

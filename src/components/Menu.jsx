import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Menu(props) {
  return (
    <nav className="menu">
      <NavLink
        className="menu__item"
        to="/"
        exact
        activeClassName={'menu__item-active'}
        aria-current="page">
        Home
      </NavLink>
      <NavLink
        className="menu__item"
        to="/drift"
        activeClassName={'menu__item-active'}
        aria-current="page">
        Drift School
      </NavLink>
      <NavLink
        className="menu__item"
        to="/timeattack"
        activeClassName={'menu__item-active'}
        aria-current="page">
        Time Attack
      </NavLink>
      <NavLink
        className="menu__item"
        to="/forza"
        activeClassName={'menu__item-active'}
        aria-current="page">
        Forza Karting
      </NavLink>
    </nav>
  )
}

Menu.propTypes = {}

export default Menu

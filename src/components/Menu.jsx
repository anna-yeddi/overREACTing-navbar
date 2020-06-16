import React from 'react'
import PropTypes from 'prop-types'

function Menu(props) {
  return (
    <nav className="menu">
      <a className="menu__item" href="/">
        Home
      </a>
      <a className="menu__item" href="/drift">
        Drift School
      </a>
      <a className="menu__item" href="/timeattack">
        Time Attack
      </a>
      <a className="menu__item" href="/forza">
        Forza Karting
      </a>
    </nav>
  )
}

Menu.propTypes = {}

export default Menu

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/* eslint-disable */
const Header = (props) => (
    <header id="header" className="alt">
      <Link to="/" className="logo"><strong>PAA</strong> <span>National Convention</span></Link>
      <nav>
          <a className="register-header" href="https://46thpaa.eventbrite.com/" rel="noopener noreferrer" target="_blank">Register Now!</a>
          <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
      </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header

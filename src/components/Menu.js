import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/* eslint-disable */
const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/register">Register</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/events">Events</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/entertainment">Entertainment</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsors">Sponsors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/hotel">Hotel</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/* eslint-disable */
const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><a onClick={props.onToggleMenu} href="https://46thpaa.eventbrite.com/" rel="noopener noreferrer" target="_blank">Register Now!</a></li>
                <li><Link onClick={props.onToggleMenu} to="/welcome">Welcome</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/events">Events</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/entertainment">Entertainment</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/dance">Dance Groups</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsors">Sponsors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/lessons">Dance Lessons</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/hotel">Hotel & Flights</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

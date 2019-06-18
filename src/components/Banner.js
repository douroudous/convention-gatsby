import React from 'react'
import Announcements from '../components/Announcements'
import Register from '../components/Register'

import logo from '../assets/images/full_logo.jpg'


const Banner = (props) => (
    <div>
      <section id="banner" className="major home-banner">
        <img className="convention-logo" src={logo} alt="" />
      </section>
      <Announcements />
      <Register />
    </div>
)

export default Banner

import React from 'react'
import Register from '../components/Register'

import logo from '../assets/images/full_logo.jpg'


const Banner = (props) => (
    <div>
      <section id="banner" className="major home-banner">
        <img className="convention-logo" src={logo} alt="" />
      </section>
      <Register />
    </div>
)

export default Banner

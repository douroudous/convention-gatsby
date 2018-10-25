import React from 'react'
import logo from '../assets/images/full_logo.jpg'


const Banner = (props) => (
    <section id="banner" className="major home-banner">
      <img className="convention-logo" src={logo} alt="" />
        {/*  <div className="inner">


            <header className="major">
                <h1>June 28 - July 3, 2019</h1>
            </header>
            <div className="content">
                <p>Pancretan Association of America <br/>
                June 28 - July 3, 2019<br/>
                Springfield, Massachusetts</p>

                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>

            </div>

        </div>*/}
    </section>
)

export default Banner

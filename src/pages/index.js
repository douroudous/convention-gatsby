import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import tzougano from '../assets/images/tzougano-horizontal.jpg'
import sheraton from '../assets/images/sheraton.jpg'
import mcdance from '../assets/images/mcdance.jpg'
import kalitsouni from '../assets/images/kalitsouni.jpg'
import lyrahump from '../assets/images/lyrahump.jpg'
import dodgeball from '../assets/images/dodgeball.jpg'
import adultRegistration from '../assets/images/adult-registration.pdf'
import youthRegistration from '../assets/images/youth-registration.pdf'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Pancretan Association of America - 46th National Convention"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${dodgeball})`}}>
                            <header className="major">
                                <h3>Welcome!</h3>
                            </header>
                            <Link to="/welcome" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${kalitsouni})`}}>
                            <header className="major">
                                <h3>Events</h3>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${tzougano})`}}>
                            <header className="major">
                                <h3>Entertainment</h3>
                            </header>
                            <Link to="/entertainment" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${mcdance})`}}>
                            <header className="major">
                                <h3>Dance Groups</h3>
                            </header>
                            <Link to="/dance" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${sheraton})`}}>
                            <header className="major">
                                <h3>Hotel & Flight</h3>
                            </header>
                            <Link to="/hotel" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${lyrahump})`}}>
                            <header className="major">
                                <h3>Contact Us</h3>
                                <p>Sponsorship, Album, Rizites, Open Mic</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner register-now">
                              <a href="https://46thpaa.eventbrite.com/" rel="noopener noreferrer" target="_blank" className="button special big">Register Online!</a>
                        </div>
                    </section>
                    <section id="two">
                        <div className="inner register-now">
                            <h2>Download Registration Forms</h2>
                            <ul className="actions">
                              <li><a href={adultRegistration} rel="noopener noreferrer" target="_blank" className="button icon fa-download big">Adult</a></li>
                              <li><a href={youthRegistration} rel="noopener noreferrer" target="_blank" className="button icon fa-download big">PYA</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

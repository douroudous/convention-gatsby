import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p>Coming soon!</p>
                            </header>
                            {/*<Link to="/about" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Events</h3>
                                <p>Coming soon!</p>
                            </header>
                            {/*<Link to="/events" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Music</h3>
                                <p>Mihalis Tzouganakis</p>
                            </header>
                            <Link to="/music" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Dance</h3>
                                {/*<p>Viglatores Chania</p>*/}
                            </header>
                            <Link to="/dance" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Hotel</h3>
                                <p>Sheraton Springfield</p>
                            </header>
                            <Link to="/hotel" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Contact Us</h3>
                                <p>We&#39;d love to hear from you</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Registration</h2>
                            </header>
                            <p>Coming soon!</p>
                            {/*
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                            */}
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

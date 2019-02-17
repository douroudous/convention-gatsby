import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import GenericBanner from '../components/GenericBanner'

import danceRizitesForm from '../assets/images/dance-rizites-form.pdf'
import mcdance from '../assets/images/mcdance.jpg'


const Dance = (props) => (
    <Layout>
        <Helmet>
            <title>Youth Dance Groups - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Dance" />
        </Helmet>

        <GenericBanner
          heading='Youth Dance Groups'
          image="dance-banner"
        />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Featured Chapters</h2>
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a className="image">
                      <img src={mcdance} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>104 - Minos-Crete Youth</h3>
                            </header>
                            <p>Springfield, MA</p>
                            <ul className="actions">
                                <li><a href="https://www.facebook.com/CretanYouth/" rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*
                <section>
                    <a className="image">
                      <img src={pya} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pancretan Youth of America</h3>
                            </header>
                            <p>The PYA is the oldest federation of Greek American youth organizations in the nation, with twenty organized youth chapters through the US.</p>
                            <p>Is your dance group interested in performing at the convention? Please contact Alex Hatzis at <a href="mailto:ahatzis9988@gmail.com ">ahatzis9988@gmail.com</a>.</p>
                            <ul className="actions">
                                <li><a href="https://www.facebook.com/groups/14049154750/" rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                */}
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Group Registration</h2>
                    </header>
                    <p>Is your dance group interested in performing at the convention? Please contact Alex Hatzis at <a href="mailto:ahatzis9988@gmail.com ">ahatzis9988@gmail.com</a>. More information in the form below!</p>
                    <ul className="actions">
                      <li><a href={danceRizitesForm} rel="noopener noreferrer" target="_blank" className="button">Dance/Rizites Form</a></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Dance

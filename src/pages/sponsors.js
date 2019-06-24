import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import GenericBanner from '../components/GenericBanner'

import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'

const Sponsors = (props) => (
    <Layout>
        <Helmet>
            <title>Contact Us - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <GenericBanner
          heading='Sponsors'
        />

        <div id="main">
            <section className="spotlights">
                <section>
                    <div className="image">
                      {/*<img src={pic08} alt="" />*/}
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Become a Sponsor</h3>
                            </header>
                            <p>More information in the form below!</p>
                            <ul className="actions">
                              <li><a href={sponsorForm} rel="noopener noreferrer" target="_blank" className="button">Sponsorship Form</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                    {/*<img src={pic08} alt="" />*/}
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Commemorative Album</h3>
                            </header>
                            <p>More information in the form below!</p>
                            <ul className="actions">
                              <li><a href={albumForm} rel="noopener noreferrer" target="_blank" className="button">Album Form</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Sponsors

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import GenericBanner from '../components/GenericBanner'

import danceRizitesForm from '../assets/images/dance-rizites-form.pdf'
import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contact Us - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <GenericBanner
          heading='Contact Us'
          line1="Sponsorships, Album, "
          line2="Rizites, Open Mic"
        />

        <div id="main">
            <section className="spotlights">
                <section>
                    <a className="image">
                      {/*<img src={pic08} alt="" />*/}
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sponsorships</h3>
                            </header>
                            <p>BLURB HERE ABOUT SUPPORTING OUR CHAPTER</p>
                            <ul className="actions">
                              <li><a href={sponsorForm} rel="noopener noreferrer" target="_blank" className="button">Sponsorship Form</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a className="image">
                    {/*<img src={pic08} alt="" />*/}
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Commemorative Album</h3>
                            </header>
                            <p>BLURB HERE ABOUT SUPPORTING OUR CHAPTER AND BUYING A CONVENTION ALBUM</p>
                            <ul className="actions">
                              <li><a href={albumForm} rel="noopener noreferrer" target="_blank" className="button">Album Form</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a className="image">
                    {/*<img src={pic08} alt="" />*/}
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rizitiko Group</h3>
                            </header>
                            <p>Join the Springfield Rizites for this momentous occasion! No previous Rizitika singing experience required. More information in the form below.</p>
                            <ul className="actions">
                              <li><a href={danceRizitesForm} rel="noopener noreferrer" target="_blank" className="button">Dance/Rizites Form</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a className="image">
                    {/*<img src={pic08} alt="" />*/}
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Open Mic Night</h3>
                            </header>
                            <p>Are you a Cretan musician interested in performing at our Open Mic Night event? Contact Vasili Hatzis at <a href="mailto:vhatzis@comcast.net">vhatzis@comcast.net</a>.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Contact

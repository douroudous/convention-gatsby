import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import GenericBanner from '../components/GenericBanner'

import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'

// A Special Thanks to our Sponsors of the
// 46th PAA National Convention
// hosted by
// Cretan’s Association Minos-Crete, Proodos, & Minos-Crete Youth of Springfield, MA.

// Platinum Sponsors
// Church & Main Deli-Café Costas Bouzakis & Family Elias Bouzakis & Family Kalamarakis Family Peter Kantos & Family John Kontekakis Marnelakis Family Oak Barrel Wine & Spirits Manny Rovithis White Birch Insurance
// Gold Sponsors
// John Bertakis Steve’s Boston Seafood Titan Foods George Trikounakis
// Silver Sponsors
// Costas Dourountoudakis & Family Mike Dourountoudakis & Family Anna Giannoulias
// St. George Cathedral George Tzanidakis
const Sponsors = (props) => (
    <Layout>
        <Helmet>
            <title>Sponsors - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <GenericBanner
          heading='Sponsors'
        />

        <div id="main">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h2>Music</h2>
                </header>
            </div>
        </section>
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

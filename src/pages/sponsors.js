import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Sponsor from '../components/Sponsor'
import GenericBanner from '../components/GenericBanner'

import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'
import churchmain from '../assets/images/church_main.png'
import oakbarrel from '../assets/images/oakbarrel.png'
import mannys from '../assets/images/mannys.jpg'
import whitebirch from '../assets/images/whitebirch.jpg'
import titan from '../assets/images/titanlogo.jpg'
import kantanos from '../assets/images/kantanos.jpeg'

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
                    <h2>Platinum Sponsors</h2>
                </header>
            </div>
        </section>
        <section className="spotlights">
          <Sponsor
            name={"Church & Main Deli-Café"}
            image={churchmain}
          />
          <Sponsor
            name={"Costas Bouzakis & Family"}
          />
          <Sponsor
            name={"Elias Bouzakis & Family"}
          />
          <Sponsor
            name={"Kalamarakis Family"}
          />
          <Sponsor
            name={"Peter Kantos & Family"}
          />
          <Sponsor
            name={"John Kontekakis"}
            image={kantanos}
          />
          <Sponsor
            name={"Marnelakis Family"}
          />
          <Sponsor
            name={"Oak Barrel Wine & Spirits"}
            image={oakbarrel}
          />
          <Sponsor
            name={"Manny's Olive Oil"}
            image={mannys}
          />
          <Sponsor
            name={"White Birch Insurance"}
            image={whitebirch}
          />
        </section>
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h2>Gold Sponsors</h2>
                </header>
            </div>
        </section>
        <section className="spotlights">
          <Sponsor
            name={"John Bertakis"}
          />
          <Sponsor
            name={"Steve’s Boston Seafood"}
          />
          <Sponsor
            name={"Titan Foods"}
            image={titan}
          />
          <Sponsor
            name={"George Trikounakis"}
          />
        </section>
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h2>Silver Sponsors</h2>
                </header>
            </div>
        </section>
        <section className="spotlights">
          <Sponsor
            name={"Costas Dourountoudakis & Family"}
          />
          <Sponsor
            name={"Mike Dourountoudakis & Family"}
          />
          <Sponsor
            name={"Anna Giannoulias"}
          />
          <Sponsor
            name={"St. George Cathedral"}
          />
          <Sponsor
            name={"George Trikounakis"}
          />
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

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import DanceGroup from '../components/DanceGroup'
import GenericBanner from '../components/GenericBanner'

import mcdance from '../assets/images/mcdance.jpg'
import megalonissos from '../assets/images/megalonissos.png'
import drosoulites from '../assets/images/drosoulites.jpg'
import omonoia from '../assets/images/omonoia.jpg'

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
              <DanceGroup
                name='Minos-Crete Dance Group'
                image={mcdance}
                location='Springfield, MA'
                fb='https://www.facebook.com/CretanYouth/'
              />
              <DanceGroup
                name='Minos-Crete Junior Dance Group '
                location='Springfield, MA'
                fb='https://www.facebook.com/CretanYouth/'
              />
              <DanceGroup
                name='Megalonisos Dance Group'
                image={megalonissos}
                location='Boston, MA'
              />
              <DanceGroup
                name='Omonoia Dance Group'
                location='New York, NY'
                image={omonoia}
              />
              <DanceGroup
                name='Omonoia Junior Dance Group'
                location='New York, NY'
              />
              <DanceGroup
                name='Drosoulites of Clearwater'
                location='Clearwater, FL'
                image={drosoulites}
              />
              <DanceGroup
                name='District 3 Dance Group'
                location='Ohio & Pennsylvania'
              />
            </section>
            <section>
                <div className="inner">
                    <header className="major">
                        <h2>Group Registration</h2>
                    </header>
                    <p>Is your dance group interested in performing at the convention? Please fill out the form below. Contact Alex Hatzis at <a href="mailto:ahatzis9988@gmail.com ">ahatzis9988@gmail.com</a> with any questions.</p>
                    <iframe title='dance-form' src="https://docs.google.com/forms/d/e/1FAIpQLSdvyXOuxMxrdQWGdLZLy9IzjDbkNMN8FbW4LYYbQ4JdCQ_IaA/viewform?embedded=true" className="dance-form" width="640" height="1491" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                </div>
            </section>
        </div>
    </Layout>
)

export default Dance

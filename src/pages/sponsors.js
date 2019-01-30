import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'

const Sponsors = (props) => (
    <Layout>
        <Helmet>
            <title>Sponsors - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Sponsors</h1>
                  </header>
                  <embed src={sponsorForm} type="application/pdf" width="70%" height="1150px" />
                  <embed src={albumForm} type="application/pdf" width="70%" height="1150px" />
                </div>
            </section>
        </div>

    </Layout>
)

export default Sponsors

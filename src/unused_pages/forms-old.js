import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import danceRizitesForm from '../assets/images/dance-rizites-form.pdf'
import sponsorForm from '../assets/images/sponsorship-form.pdf'
import albumForm from '../assets/images/album-form.pdf'

const Forms = (props) => (
    <Layout>
        <Helmet>
            <title>Forms - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Forms</h1>
                  </header>
                  <p>Are you a Cretan musician interested in performing at our Open Mic Night event? Contact Vasili Hatzis at <a href="mailto:vhatzis@comcast.net">vhatzis@comcast.net</a>.</p>
                  <embed src={danceRizitesForm} type="application/pdf" width="70%" height="1150px" />
                  <embed src={sponsorForm} type="application/pdf" width="70%" height="1150px" />
                  <embed src={albumForm} type="application/pdf" width="70%" height="1150px" />
                  {/*
                  open Mic
                  sponsors

                  */}
                </div>
            </section>
        </div>

    </Layout>
)

export default Forms

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import danceRizitesForm from '../assets/images/dance-rizites-form.pdf'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contact - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Contact</h1>
                  </header>
                  <p>Are you a Cretan musician interested in performing at our Open Mic Night event? Contact Vasili Hatzis at <a href="mailto:vhatzis@comcast.net">vhatzis@comcast.net</a>.</p>
                  <embed src={danceRizitesForm} type="application/pdf" width="70%" height="1150px" />
                </div>
            </section>
        </div>

    </Layout>
)

export default Contact

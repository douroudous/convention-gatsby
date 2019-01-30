import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import adultRegistration from '../assets/images/adult-registration.pdf'
import youthRegistration from '../assets/images/youth-registration.pdf'

const Registration = (props) => (
    <Layout>
        <Helmet>
            <title>Registration - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Registration</h1>
                  </header>
                  <embed src={adultRegistration} type="application/pdf" width="70%" height="1150px" />
                  <embed src={youthRegistration} type="application/pdf" width="70%" height="1150px" />
                </div>
            </section>
        </div>

    </Layout>
)

export default Registration

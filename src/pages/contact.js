import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import logo from '../assets/images/convention_logo.jpg'

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
                    <span className="image main"><img src={logo} alt="" /></span>
                    <p>PYA members! Is your dance group interested in performing at the convention? Contact Alex Hatzis at <a href="mailto:ahatzis9988@gmail.com ">ahatzis9988@gmail.com</a>.</p>
                    <p>Are you a Cretan musician interested in performing at our Open Mic Night event? Contact Vasili Hatzis at <a href="mailto:vhatzis@comcast.net">vhatzis@comcast.net</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Contact

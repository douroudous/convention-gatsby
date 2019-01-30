import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Registration = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Registration</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>put the pdfs here</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Registration

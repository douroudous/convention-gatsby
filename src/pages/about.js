import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import welcomeLetterPng from '../assets/images/welcome-letter.png'
import welcomeLetterPdf from '../assets/images/welcome-letter.pdf'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>About - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Welcome</h1>
                  </header>
                  <span className="image main"><img src={welcomeLetterPng} alt="" /></span>
                  <a href={welcomeLetterPdf} className="button next">OPEN PDF</a>
                </div>
            </section>
        </div>

    </Layout>
)

export default About

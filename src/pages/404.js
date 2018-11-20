import React from 'react'
import Layout from '../components/layout'
import logo from '../assets/images/full_logo.jpg'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>Page does not exist.</p>
                <img className="convention-logo" src={logo} alt="" />
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage

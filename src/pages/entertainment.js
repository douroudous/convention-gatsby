import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import GenericBanner from '../components/GenericBanner'

import tzoug from '../assets/images/tzoug.jpg'
import viglatores from '../assets/images/viglatores.jpg'
import pya from '../assets/images/pya.jpg'

const Entertainment = (props) => (
    <Layout>
        <Helmet>
            <title>Entertainment - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Entertainment" />
        </Helmet>

        <GenericBanner
          heading='Entertainment'
          line1="Featuring: "
          line2="Michalis Tzouganakis"
          image="tzoug-banner"
        />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Music</h2>
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a className="image">
                      <img src={tzoug} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Michalis Tzouganakis</h3>
                            </header>
                            <p>World-renowned laouto player Michalis Tzouganakis and his band.</p>
                            <ul className="actions">
                                <li><a href="https://www.facebook.com/MichalisTzouganakis/" rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
                                <li><a href="https://www.youtube.com/channel/UCVvAUAmi5F4aojmEZS0P6Ew" rel="noopener noreferrer" target="_blank" className="button">YouTube</a></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                  <div className="videos">
                    <iframe title="tzougvid1" className="video" width="420" height="315" src="https://www.youtube.com/embed/r3M5ruVficM"></iframe>
                    <iframe title="tzougvid1" className="video" width="420" height="315" src="https://www.youtube.com/embed/73Q4xodYBdk"></iframe>
                    <iframe title="tzougvid1" className="video" width="420" height="315" src="https://www.youtube.com/embed/haRsHWGLnAY"></iframe>
                    <iframe title="tzougvid1" className="video" width="420" height="315" src="https://www.youtube.com/embed/DWA5T9trepM"></iframe>
                  </div>
                </section>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Dance</h2>
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a className="image">
                      <img src={viglatores} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Viglatores Chania</h3>
                            </header>
                            <p>Founded in May 2009, "Viglatores" is a traditional dance association with over 200 active registered members. Their basic purpose is the conveying of dance tradition in its purest form, teaching 22 Cretan dances as well as dances from the rest of Greece.</p>
                            <ul className="actions">
                                <li><a href="https://www.facebook.com/viglatores09/" rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
                                <li><a href="https://www.youtube.com/user/viglatores09/" rel="noopener noreferrer" target="_blank" className="button">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a className="image">
                      <img src={pya} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pancretan Youth of America</h3>
                            </header>
                            <p>The PYA is the oldest federation of Greek American youth organizations in the nation, with twenty organized youth chapters through the US.</p>
                            <p>Is your dance group interested in performing at the convention? Please contact Alex Hatzis at <a href="mailto:ahatzis9988@gmail.com ">ahatzis9988@gmail.com</a>.</p>
                            <ul className="actions">
                                <li><a href="https://www.facebook.com/groups/14049154750/" rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Entertainment

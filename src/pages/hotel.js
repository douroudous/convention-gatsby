import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import sheraton from '../assets/images/sheraton.jpg'

const Hotel = (props) => (
    <Layout>
        <Helmet>
            <title>Hotel - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Hotel</h1>
                    </header>
                    <span className="image main"><img src={sheraton} alt="" /></span>
                    <p><a href="https://www.marriott.com/hotels/travel/bdlsm-sheraton-springfield-monarch-place-hotel/" rel="noopener noreferrer" target="_blank">Sheraton Springfield Monarch Place Hotel</a></p>
                    <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1545423091579&key=GRP&app=resvlink" rel="noopener noreferrer" target="_blank">Book now under special rate of $139/night (plus tax) for convention attendees</a></p>
                    <p>Group code for phone reservations coming soon.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Hotel

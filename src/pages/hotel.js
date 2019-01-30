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
                  <p>One Monarch Place, Springfield, Massachusetts 01144</p>
                  <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1545423091579&key=GRP&app=resvlink" rel="noopener noreferrer" target="_blank">Book now under special rate for convention attendees </a></p>
                  <p>The special PAA room rates are $139 a night for single/double occupancy (plus tax), and will be honored June 28th through July 3rd. To assure discount rates, please make your reservations prior to May 29th.</p>
                  <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1545423091579&key=GRP&app=resvlink" rel="noopener noreferrer" target="_blank">Book online </a> or call the Sheraton’s 24-hour reservation center at 1-800-426-9004. When making reservations, please specify you are with the “Pancretan Association of America (PAA) 46th National Convention.”</p>
                  <p>The Sheraton Springfield Monarch Place Hotel is located in the heart of downtown Springfield and adjacent to Tower Square Shopping Mall and Symphony Hall. The Hotel is the region’s largest and most luxurious atrium-style hotel and is within walking distance to the Basketball Hall of Fame, MGM Springfield Casino and the MassMutual Center. It is 4 blocks from the Amtrak station, 18 miles from Bradley International Airport, 75 miles from Boston Logan Airport, and directly off Interstate 91. Parking at the hotel is available to overnight guests at $18 per night. Day parking is $8.</p>
                  <p>Bradley International Airport (BDL) is the main airport serving the Springfield area. It is 18 miles from the hotel. All major airlines service the Hartford/Springfield area. For those wishing to rent a car, Bradley is serviced by all major auto rental companies. Transportation to the hotel is available by taxi, Uber or private car service. Taxis are stationed at the airport and will cost approximately $50 (four persons maximum). Uber is approximately $30. Private transportation by reservation only can be arranged through Valley Transporter - 800-872-8752 or Valet Park of America – 866-888-2538.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Hotel

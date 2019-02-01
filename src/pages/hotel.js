import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import sheraton from '../assets/images/sheraton.jpg'

const Hotel = (props) => (
    <Layout>
        <Helmet>
            <title>Hotel & Flights - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Hotel & Flights</h1>
                  </header>
                  <span className="image main"><img src={sheraton} alt="" /></span>
                  <h2>Sheraton Springfield Monarch Place Hotel</h2>

                  <p>The special PAA room rates are $139 a night for single/double occupancy (plus tax), and will be honored June 28th through July 3rd. To assure discount rates, please make your reservations prior to May 29th.</p>
                  <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1545423091579&key=GRP&app=resvlink" rel="noopener noreferrer" target="_blank" className="button next">Book now!</a></p>
                  <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1545423091579&key=GRP&app=resvlink" rel="noopener noreferrer" target="_blank">Book online</a>  or call the Sheraton’s 24-hour reservation center at 1-800-426-9004. When making reservations, please specify you are with the “Pancretan Association of America (PAA) 46th National Convention.”</p>
                  <p><iframe title="hotel-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.2579725165233!2d-72.59310268501079!3d42.10194555935597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e6de0761d453%3A0x6e20e4f602d8bf7f!2sSheraton+Springfield+Monarch+Place+Hotel!5e0!3m2!1sen!2sus!4v1549052622107" height="300" ></iframe></p>
                  <p>The Sheraton Springfield Monarch Place Hotel is located in the heart of downtown Springfield and adjacent to Tower Square Shopping Mall and Symphony Hall. The Hotel is the region’s largest and most luxurious atrium-style hotel and is within walking distance to the Basketball Hall of Fame, MGM Springfield Casino and the MassMutual Center. It is 4 blocks from the Amtrak station, 18 miles from Bradley International Airport, 75 miles from Boston Logan Airport, and directly off Interstate 91. Parking at the hotel is available to overnight guests at $18 per night. Day parking is $8.</p>
                  <h2>Flights</h2>
                  <p>Bradley International Airport (BDL) is the main airport serving the Springfield area. It is 18 miles from the hotel. All major airlines service the Hartford/Springfield area. For those wishing to rent a car, Bradley is serviced by all major auto rental companies. Transportation to the hotel is available by taxi, Uber or private car service. Taxis are stationed at the airport and will cost approximately $50 (four persons maximum). Uber is approximately $30. Private transportation by reservation only can be arranged through Valley Transporter - 800-872-8752 or Valet Park of America – 866-888-2538.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Hotel

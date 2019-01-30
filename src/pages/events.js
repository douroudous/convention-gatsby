import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Events = (props) => (
    <Layout>
        <Helmet>
            <title>Events - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Events</h1>
                    </header>
                  {  /*<span className="image main"><img src={pic11} alt="" /></span>*/}
                    <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                    <th>Location</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>Friday 6/28</td>
                                  <td>Welcome Night</td>
                                  <td>Cretan Club, Springfield</td>
                                  <td>There’s no better hospitality than the Cretan hospitality. Come meet your friends from around the country as we kick off the 46th PAA National Convention at a social gathering sponsored by the Marnelakis family. Cretan mezedes, music, dancing, friendship and tsikoudia. Casual attire.</td>
                                </tr>
                                <tr>
                                  <td>Saturday 6/29</td>
                                  <td>PAA Meeting</td>
                                  <td>Sheraton Monarch Place</td>
                                  <td>Delegate Registration, Opening Ceremony, Election of Convention Chair</td>
                                </tr>
                                <tr>
                                  <td>Saturday 6/29</td>
                                  <td>Cretan Night</td>
                                  <td>Sheraton Monarch Place</td>
                                  <td>This is the most anticipated Cretan event in the USA which occurs only once every two years. We will be entertained by the one and only Michalis Tzouganakis in a rare non-concert appearance, accompanied by his equally talented son, Alexander. Also joining us from Crete is the renowned Viglatores Dance Group of Chania performing rare and regional dances of Crete. Most importantly, we will be enthralled by our own PAA/PYA dance groups from around the country. Traditional Cretan dress or festive attire.</td>
                                </tr>
                                <tr>
                                  <td>Sunday 6/30</td>
                                  <td>Cretan Picnic</td>
                                  <td>Morgan Road Pavilion, West Springfield</td>
                                  <td>This afternoon and into the early evening you’ll be able to relax and feast on all-you-can-eat traditional Cretan and American food and drinks. Our Cretan musicians will be there with your favorite music. Fun and games galore for the whole family. Transportation provided to and from the venue. Casual attire.</td>
                                </tr>
                                <tr>
                                  <td>Sunday 6/30</td>
                                  <td>Open Mic Youth Night </td>
                                  <td>Cretan Club, Springfield</td>
                                  <td>Calling all PYA Musicians! The fun doesn’t stop when the picnic ends. Please join us at the syllogo for a night of entertainment with live music performed by members of the PYA together with famed musician Mihali Tzouganakis. There will be plenty of food, fun, and excitement to go around. You won’t want to miss this event. Do you play a Cretan instrument? Sign up now! Casual attire.</td>
                                </tr>
                                <tr>
                                  <td>Monday 7/1</td>
                                  <td>Golf Tournament</td>
                                  <td>The Ranch Golf Club, Southwick, Massachusetts</td>
                                  <td>Golf tournament for those who pre-registered. Tournament sponsored by Manny’s TV & Appliances, and Minos-Crete. For more information, contact Besi Mavridakis at 413-348-7207. Casual attire.</td>
                                </tr>
                                <tr>
                                  <td>Monday 7/1</td>
                                  <td>Youth BBQ & Game Day</td>
                                  <td>Elks Picnic Grounds, Springfield</td>
                                  <td>Join us for a fun day of outdoor games and activities! Soak up some sun while rocking out to some of the gnarliest tunes! And don’t forget to pig out on the all-you-can-eat burgers, dogs, snacks and refreshments! Transportation provided to and from the Elks picnic grounds. Casual/athletic attire.</td>
                                </tr>
                                <tr>
                                  <td>Monday 7/1</td>
                                  <td>Women’s Event/Cultural Night</td>
                                  <td>Greek Cultural Center, Springfield</td>
                                  <td>Happy 85th Anniversary Proodos! Here is an opportunity to show how much you appreciate the contributions of the extraordinary Cretan women in your life. Tonight we celebrate Cretan women and culture with great food and entertainment. Join us as we also highlight the 85-year history of the Proodos chapter. Hosted by the Springfield Cretan Ladies Society “Proodos”. Festive attire.</td>
                                </tr>
                                <tr>
                                  <td>Tuesday 7/2</td>
                                  <td>Grand Banquet</td>
                                  <td>Sheraton Monarch Place</td>
                                  <td>The grandest of all banquets unfolds as our hotel grand ballroom is transformed to provide an evening of elegance. It begins with a cocktail party followed by a delicious sit-down dinner. \Meet our honored guests and be inspired by our keynote speaker, Dr Emmanuel E. Zervos. The evening will conclude with Cretan dancers and music. You won’t want to miss this elegant affair. Formal attire.</td>
                                </tr>
                                <tr>
                                  <td>Tuesday 7/2</td>
                                  <td>Youth Red Carpet Club Night</td>
                                  <td>Kaptain Jimmy’s, Agawam, Massachusetts</td>
                                  <td> Strut your stuff down the red carpet dressed as your favorite celebrity! You’re not going to want to miss this boujee soiree featuring the local well known DJ JRipZZ dropping the illest Greek and American beats. A savory buffet is included and prizes will be awarded for our top three celebrity lookalikes! Transportation provided to and from the event. And you do not have to be 21 to join!</td>
                                </tr>
                                <tr>
                                  <td>Wednesday 7/3</td>
                                  <td>Farewell Party</td>
                                  <td>Cretan Club, Springfield</td>
                                  <td>Gather at the Minos-Crete syllogo once more to say goodbye to old and new friends as we depart tomorrow. Tonight’s party will feature Mihalis Tzouganakis. As always, Cretan hospitality is evident in food, music and dance. Casual attire.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Events

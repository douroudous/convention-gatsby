import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Event from '../components/Event'

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
                    <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Event</th>
                                    <th>Location</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Event
                                  date='Friday 6/28'
                                  time='7:00pm-?'
                                  name='Welcome Night'
                                  location='Cretan Club, Springfield'
                                  description="There’s no better hospitality than the Cretan hospitality. Come meet your friends from around the country as we kick off the 46th PAA National Convention at a social gathering sponsored by the Marnelakis family. Cretan mezedes, music, dancing, friendship and tsikoudia. Casual attire."
                                  mapId = 'CCYQ5WWiSi82'
                                />
                                <Event
                                  date='Saturday 6/29'
                                  time='9:00am-4:00pm'
                                  name='PAA Meetings'
                                  location='Sheraton Monarch Place'
                                  description='Delegate Registration, Opening Ceremony, Election of Convention Chair'
                                  mapId = 'Ao1DWops1At'
                                />
                                <Event
                                  date='Saturday 6/29'
                                  name='Cretan Night'
                                  time='6:00pm-midnight'
                                  location='Sheraton Monarch Place'
                                  description="This is the most anticipated Cretan event in the USA which occurs only once every two years. We will be entertained by the one and only Michalis Tzouganakis in a rare non-concert appearance, accompanied by his equally talented son, Alexander. Also joining us from Crete is the renowned Viglatores Dance Group of Chania performing rare and regional dances of Crete. Most importantly, we will be enthralled by our own PAA/PYA dance groups from around the country. Traditional Cretan dress or festive attire."
                                  mapId = 'Ao1DWops1At'
                                />
                                <Event
                                  date='Sunday 6/30'
                                  time='2:00pm-9:00pm'
                                  name='Cretan Picnic'
                                  location='Morgan Road Pavilion, West Springfield'
                                  description="This afternoon and into the early evening you’ll be able to relax and feast on all-you-can-eat traditional Cretan and American food and drinks. Our Cretan musicians will be there with your favorite music. Fun and games galore for the whole family. Transportation provided to and from the venue. Casual attire."
                                  mapId = 'iABKwsxTnH32'
                                />
                                <Event
                                  date='Sunday 6/30'
                                  name='Open Mic Youth Night'
                                  time='9:30pm-?'
                                  location='Cretan Club, Springfield'
                                  description="Calling all PYA Musicians! The fun doesn’t stop when the picnic ends. Please join us at the syllogo for a night of entertainment with live music performed by members of the PYA together with famed musician Mihali Tzouganakis. There will be plenty of food, fun, and excitement to go around. You won’t want to miss this event. Do you play a Cretan instrument? Sign up now! Casual attire."
                                  mapId = 'CCYQ5WWiSi82'
                                />
                                <Event
                                  date='Monday 7/1'
                                  time='11:30am'
                                  name='Golf Tournament'
                                  location='The Ranch Golf Club, Southwick, Massachusetts'
                                  description="Golf tournament for those who pre-registered. Tournament sponsored by Manny’s TV & Appliances, and Minos-Crete. For more information, contact Besi Mavridakis at 413-348-7207. Casual attire."
                                  mapId = 'LbqW2vobhuA2'
                                />
                                <Event
                                  date='Monday 7/1'
                                  time='6:30pm-midnight'
                                  name='Women’s Event/Cultural Night'
                                  location='Greek Cultural Center, Springfield'
                                  description="Happy 85th Anniversary Proodos! Here is an opportunity to show how much you appreciate the contributions of the extraordinary Cretan women in your life. Tonight we celebrate Cretan women and culture with great food and entertainment. Join us as we also highlight the 85-year history of the Proodos chapter. Hosted by the Springfield Cretan Ladies Society “Proodos”. Festive attire."
                                  mapId = 'ri1bPGeuAHN2'
                                />
                                <Event
                                  date='Tuesday 7/2'
                                  time='1:30pm-5:00pm'
                                  name='Youth Pool Party & BBQ'
                                  location='Sheraton Hotel Pool'
                                  description="Join us for a fun day soaking up the sun by the hotel pool! Food will be served and games will be played, all ages are welcome! Pool attire."
                                  mapId = 'Ao1DWops1At'
                                />
                                <Event
                                  date='Tuesday 7/2'
                                  time='6:00pm-midnight'
                                  name='Grand Banquet'
                                  location='Sheraton Monarch Place'
                                  description="The grandest of all banquets unfolds as our hotel grand ballroom is transformed to provide an evening of elegance. It begins with a cocktail party followed by a delicious sit-down dinner. Meet our honored guests and be inspired by our keynote speaker, Dr Emmanuel E. Zervos. The evening will conclude with Cretan dancers and music. You won’t want to miss this elegant affair. Formal attire."
                                  mapId = 'Ao1DWops1At'
                                />
                                <Event
                                  date='Tuesday 7/2'
                                  time='9:00pm-midnight'
                                  name='Youth Red Carpet Club Night'
                                  location='View Street Tavern, Chicopee, Massachusetts'
                                  description="Strut your stuff down the red carpet dressed as your favorite celebrity! You’re not going to want to miss this boujee soiree featuring the local well known DJ JRipZZ dropping the illest Greek and American beats. A savory buffet is included and prizes will be awarded for our top three celebrity lookalikes! Transportation provided to and from the event. And you do not have to be 21 to join!"
                                  mapId = 'oJh279AYcdG2'
                                />
                                <Event
                                  date='Wednesday 7/3'
                                  time='7:00pm-?'
                                  name='Farewell Party'
                                  location='Cretan Club, Springfield'
                                  description="Gather at the Minos-Crete syllogo once more to say goodbye to old and new friends as we depart tomorrow. Tonight’s party will feature Mihalis Tzouganakis. As always, Cretan hospitality is evident in food, music and dance. Casual attire."
                                  mapId = 'CCYQ5WWiSi82'
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Events

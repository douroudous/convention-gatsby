import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Lesson from '../components/Lesson'
import viglatores from '../assets/images/viglatores.jpg'

const Lessons = (props) => (
    <Layout>
        <Helmet>
            <title>Dance Lessons - Pancretan Association of America - 46th National Convention</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Dance Lessons</h1>
                    </header>
                    <p></p>
                    <ul className="actions">
                      <li>Don't miss a chance for Cretan dance lessons with the renowned dance group, <a href='#viglatores'>Viglatores Chania!</a></li>
                      <li><strong>Location:</strong> Mahogany Room - Sheraton Monarch Place</li>
                      <li><strong>Date:</strong> Saturday, June 29th</li>
                    </ul>
                    <hr />
                    <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Description</th>
                                    <th>For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Lesson
                                  time='11:00am-12:30pm'
                                  description="Cretan dance lessons"
                                  level="Children 6-12 (beginner to advanced)"
                                />
                                <Lesson
                                  time=''
                                  description="Sousta dance workshop"
                                  level="Adults (beginner to advanced)"
                                />
                                <Lesson
                                  time='12:30pm-2:00pm'
                                  description="Cretan dance lessons"
                                  level="Adults (beginner to advanced)"
                                />
                                <Lesson
                                  time=''
                                  description="Regional and lesser known Cretan dances"
                                  level="PYA Dance Groups"
                                />
                                <Lesson
                                  time='2:00pm-3:30pm'
                                  description="Cretan dance lessons"
                                  level="Teenagers (beginner to advanced)"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="viglatores" className="spotlights">
                <section>
                    <div className="image">
                      <img src={viglatores} alt="" />
                    </div>
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
            </section>
        </div>

    </Layout>
)

export default Lessons

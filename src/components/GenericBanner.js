import React from 'react'

const GenericBanner = (props) => (
    <section id="banner" className={`style2 ${props.image}`}>
        <div className="inner">
            <header className="major">
                <h1>{props.heading}</h1>
            </header>
            <div className="content">
                <p>{props.line1}<br />{props.line2}</p>
            </div>
        </div>
    </section>
)

export default GenericBanner

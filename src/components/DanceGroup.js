import React from 'react'


const DanceGroup = (props) => (
  <section>
    <div className="image">
      <img src={props.image} alt="" />
    </div>
    <div className="content">
        <div className="inner">
            <header className="major">
                <h3>{props.name}</h3>
            </header>
            <p>{props.location}</p>
            <ul className="actions">
              { props.fb ? (
                <li><a href={props.fb} rel="noopener noreferrer" target="_blank" className="button">Facebook</a></li>
              ) : null}
            </ul>
        </div>
    </div>
  </section>
)

export default DanceGroup

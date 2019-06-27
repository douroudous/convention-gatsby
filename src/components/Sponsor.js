import React from 'react'


const Sponsor = (props) => (
  <section>
      <div className="image">
      <img src={props.image} alt="" />
      </div>
      <div className="content">
          <div className="inner">
              <header className="major">
                  <h3>{props.name}</h3>
              </header>
          </div>
      </div>
  </section>
)

export default Sponsor

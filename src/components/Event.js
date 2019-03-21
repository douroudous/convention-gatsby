import React from 'react'

const Event = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.name}</td>
    <td><a href={"https://goo.gl/maps/" + props.mapId} rel="noopener noreferrer" target="_blank">{props.location}</a></td>
    <td>{props.description}</td>
  </tr>
)

export default Event

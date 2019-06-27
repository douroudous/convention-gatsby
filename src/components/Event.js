import React from 'react'

const Event = (props) => (
  <tr>
  { props.main ? (
    <td><b><em>{props.date}</em></b></td>
  ) : (
    <td>{props.date}</td>
  )}    { props.main ? (
      <td><b><em>{props.time}</em></b></td>
    ) : (
      <td>{props.time}</td>
    )}
    { props.main ? (
      <td><b><em>{props.name}</em></b></td>
    ) : (
      <td>{props.name}</td>
    )}
    { props.mapId ? (
      <td><a href={"https://goo.gl/maps/" + props.mapId} rel="noopener noreferrer" target="_blank">{props.location}</a></td>
    ) : (
      <td>{props.location}</td>
    )}
    <td>{props.description}</td>
  </tr>
)

export default Event

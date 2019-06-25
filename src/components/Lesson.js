import React from 'react'

const Lesson = (props) => (
  <tr>
    <td>{props.time}</td>
    <td>{props.description}</td>
    <td>{props.level}</td>
  </tr>
)

export default Lesson

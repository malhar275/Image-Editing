import React from 'react'
import PropTypes from 'prop-types'

const Ex2 = (props)=> {
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.rollno}</li>
            <li> {props.markks}</li>
        </ul>
    </div>
  )
}

Ex2.propTypes = {}

export default Ex2
//  write a react code to print cars,brand name,model name(props) using json
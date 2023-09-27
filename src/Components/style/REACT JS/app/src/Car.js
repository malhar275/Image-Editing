import React from 'react'
import PropTypes from 'prop-types'

const Car = props => {
  return (
    <div style={{backgroundColor:"red"}}>
        <ul>
            <li>{props.hii.brand}</li>
            <li>{props.hii.model}</li>
        </ul>
    </div>
  )
}

Car.propTypes = {}

export default Car
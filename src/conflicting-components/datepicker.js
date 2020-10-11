import React from 'react'
import PropTypes from 'prop-types'

const DatePicker = ({ lastMonth }) => (
  <>
    { lastMonth.toString() }
  </>
)

DatePicker.propTypes = {
  lastMonth: PropTypes.instanceOf(Date),
}

DatePicker.defaultProps = {
  lastMonth: new Date(),
}

export default DatePicker

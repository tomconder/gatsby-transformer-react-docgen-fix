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
  /**
   * Description of lastMonth
   */
  lastMonth: new Date(),
}

export default DatePicker

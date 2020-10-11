import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, text }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type}>{text}</button>
)

Button.propTypes = {
  /**
   * Description of type
   */
  type: PropTypes.oneOf(['button', 'submit']),
  /**
   * Description of text
   */
  text: PropTypes.string,
}

Button.defaultProps = {
  type: 'submit',
  text: '',
}

export default Button

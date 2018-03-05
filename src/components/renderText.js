import React from 'react'
import PropTypes from 'prop-types'

const RenderText = ({ textArray, typedWordsArray, remainingWordsArray }) => {
  return (
    <h4>
      {textArray.map((text, index) => {
        return typedWordsArray[index] === text ? (
          <span style={{ color: 'green' }} key={index}>
            {text + ' '}
          </span>
        ) : (
          <span key={index}>{text + ' '}</span>
        )
      })}
    </h4>
  )
}
RenderText.defaultProps = {
  textArray: [],
  typedWordsArray: [],
  remainingWordsArray: []
}
RenderText.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string),
  typedWordsArray: PropTypes.arrayOf(PropTypes.string),
  remainingWordsArray: PropTypes.arrayOf(PropTypes.string)
}

export default RenderText

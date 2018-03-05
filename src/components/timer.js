import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Timer extends Component {
  state = {
    count: 0
  }
  interval = null
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const { totalTime } = this.props
    return (
      <div>
        <h2>
          Time Left : {parseInt(totalTime / 1000 - this.state.count, 10)} s
        </h2>
      </div>
    )
  }
}

Timer.defaultProps = {
  totalTime: 0
}
Timer.propTypes = {
  totalTime: PropTypes.number
}
export default Timer

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { getText } from './../modules/actions/tracer'
import RenderText from './../components/renderText'
import Timer from './../components/timer'

class TypeRacer extends Component {
  state = {
    value: '',
    startCounter: false,
    endCounter: false
  }
  parsedText = ''
  textArray = []
  remainingWordsArray = []
  typedWordsArray = []
  totalTime = 0

  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.text && nextProps.text) {
      const regex = /(<([^>]+)>)/gi
      this.parsedText = nextProps.text.replace(regex, '')
      this.remainingWordsArray = this.parsedText.split(' ')
      this.textArray = this.parsedText.split(' ')
      // Set the timeout according to the normal speed of typing 40 words per minute
      this.totalTime = Math.ceil(this.textArray.length / 40 * 60000)
    }
  }
  componentDidMount() {
    const { getText } = this.props
    // Call the getText function to fetch the random text
    getText()
  }
  handleTextChanges = () => {
    const lastChar = this.state.value[this.state.value.length - 1]
    if (lastChar === ' ') {
      if (this.state.value === this.remainingWordsArray[0] + ' ') {
        this.typedWordsArray.push(this.remainingWordsArray[0])
        this.remainingWordsArray.shift()
        this.setState({
          value: ''
        })
      }
    }
  }
  handleText = e => {
    this.setState(
      {
        value: e.target.value
      },
      this.handleTextChanges
    )
  }
  onEndCounter = () => {
    this.setState({
      endCounter: true
    })
  }
  handleStartRace = () => {
    this.setState(
      {
        startCounter: true,
        endCounter: false
      },
      () => {
        setTimeout(this.onEndCounter, this.totalTime)
      }
    )
  }
  render() {
    return (
      <div>
        {!this.state.endCounter && (
          <Button onClick={this.handleStartRace}>
            Click to start the race
          </Button>
        )}
        {this.state.startCounter &&
          !this.state.endCounter && (
            <div>
              <Timer totalTime={this.totalTime} />
              <RenderText
                textArray={this.textArray}
                typedWordsArray={this.typedWordsArray}
                remainingWordsArray={this.remainingWordsArray}
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Type the letters</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="textarea"
                  onChange={this.handleText}
                  value={this.state.value}
                />
              </FormGroup>
            </div>
          )}
        {this.state.endCounter && (
          <div>
            <h2>The Race has been finished</h2>
            <h3>
              Your've typed a total of {this.typedWordsArray.length} words out
              of {this.textArray.length}
            </h3>
          </div>
        )}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    text: state.tracer.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getText: bindActionCreators(getText, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypeRacer)

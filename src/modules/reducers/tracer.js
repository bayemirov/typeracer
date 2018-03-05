import AppConstants from './../constants'

const initialState = {
  loading: false,
  text: '',
  error: false
}

function tracer(state = initialState, action) {
  switch (action.type) {
    case AppConstants.TRACER.GET_TEXT:
      return {
        ...state,
        loading: true
      }
    case AppConstants.TRACER.GET_TEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        text: action.payload
      }
    case AppConstants.TRACER.GET_TEXT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default tracer

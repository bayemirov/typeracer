import AppConstants from './../constants'

const initialUserState = {
  loading: false,
  user: null,
  error: false
}

function user(state = initialUserState, action) {
  switch (action.type) {
    case AppConstants.USER.LOGIN:
      return {
        ...state,
        loading: true
      }
    case AppConstants.USER.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case AppConstants.USER.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default user

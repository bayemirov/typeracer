import { put, takeEvery, call } from 'redux-saga/effects'
import AppConstants from './../constants'
import { createAction } from './../actions/utils'

const fetchText = async () => {
  try {
    const response = await fetch('http://www.randomtext.me/api/')
    return response.json()
  } catch (e) {
    return e
  }
}
export function* getTracerText(action) {
  try {
    const response = yield call(fetchText)
    yield put(
      createAction(AppConstants.TRACER.GET_TEXT_SUCCESS, response.text_out)
    )
  } catch (error) {
    yield put(createAction(AppConstants.TRACER.GET_TEXT_FAIL, null, error))
  }
}

function* mySaga() {
  yield takeEvery(AppConstants.TRACER.GET_TEXT, getTracerText)
}

export default mySaga

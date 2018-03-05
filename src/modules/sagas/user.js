import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import AppConstants from './../constants'

function* userLogin(action) {
  try {
    yield call(delay, 3000)
    yield put({ type: AppConstants.USER.LOGIN_SUCCESS })
  } catch (e) {
    yield put({ type: AppConstants.USER.LOGIN_FAIL })
  }
}

function* mySaga() {
  yield takeEvery(AppConstants.USER.LOGIN, userLogin)
}

export default mySaga

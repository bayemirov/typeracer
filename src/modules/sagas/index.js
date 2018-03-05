import user from './user'
import tracer from './tracer'
import { fork, all } from 'redux-saga/effects'

export default function* root() {
  yield all([fork(user), fork(tracer)])
}

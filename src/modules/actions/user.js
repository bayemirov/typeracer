import { createAction } from './utils'
import AppConstants from './../constants'

export function login() {
  return createAction(AppConstants.USER.LOGIN)
}

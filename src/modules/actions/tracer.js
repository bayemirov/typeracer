import AppConstants from './../constants'
import { createAction } from './utils'

export function getText() {
  return createAction(AppConstants.TRACER.GET_TEXT)
}

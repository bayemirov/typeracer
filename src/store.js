import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createBrowserHistory } from 'history'
import storage from 'redux-persist/es/storage'
import logger from 'redux-logger'
import reducer from './modules/reducers'
import RootSagas from './modules/sagas'

// Create the history object
export const history = createBrowserHistory()

// Storage config
const config = {
  key: 'root',
  storage // default storage is local storage
}

const reducers = persistCombineReducers(config, reducer)

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    compose(applyMiddleware(...[logger, sagaMiddleware]))
  )
  const persistor = persistStore(store)
  sagaMiddleware.run(RootSagas)
  return {
    store,
    persistor
  }
}

export default configureStore

import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import Login from './../../routes'

export default class Boot {
  constructor() {
    const store = configureStore()
    this.boot(store)
  }
  boot(ReduxStore) {
    ReactDOM.render(
      <PersistGate persistor={ReduxStore.persistor}>
        <Provider store={ReduxStore.store}>
          <div>
            {' '}
            <h2 style={{ color: 'red' }}> TypeRacer </h2>
            <Login />
          </div>
        </Provider>
      </PersistGate>,
      document.getElementById('root')
    )
  }
}

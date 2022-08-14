import { configureStore } from '@reduxjs/toolkit'
import { CartState } from './modules/cart/types'
import { rootReducer } from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga } from './modules/rootSaga'
import createSagaMiddleware from '@redux-saga/core'

export type GlobalState = {
  cart: CartState
}

// estado maior onde todos os pequenos estados estão mantidos
export function configureAppStore() {
  const middlewares = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: [middlewares],
  })

  composeWithDevTools()

  middlewares.run(rootSaga)

  return store
}

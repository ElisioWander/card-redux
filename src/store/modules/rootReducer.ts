import { combineReducers } from 'redux'
import { cart } from './cart/reducer'

// Combina os pequenos estados mantidos dentro da pasta modules em um único objeto
// contendo todos os estados pequenos
// Função enviada para o estado maior, ou seja, o store
export const rootReducer = combineReducers({
  cart,
})

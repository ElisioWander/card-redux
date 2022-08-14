import { Reducer } from 'redux'
import { ActionType, CartState } from './types'
import produce from 'immer'

const INITIAL_STATE: CartState = {
  items: [],
  failureStockCheck: [],
}

export const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.ADD_PRODUCT_TO_CART_SUCCESS: {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
            product,
            quantity: 1,
          })
        }

        break
      }

      case ActionType.ADD_PRODUCT_TO_CART_FAILURE: {
        draft.failureStockCheck.push(action.payload.productId)

        break
      }

      default: {
        return draft
      }
    }
  })
}

import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { GlobalState } from '../..'
import { ActionType } from './types'
import { api } from '../../../services/api'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

type StockResponse = {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: GlobalState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    )
  })

  const avalibleStockResponse: AxiosResponse<StockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  )

  if (avalibleStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export const cartSaga = all([
  takeLatest(ActionType.ADD_PRODUCT_TO_CART_REQUEST, checkProductStock),
])

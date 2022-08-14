import { ActionType, ProductData } from './types'

export function addProductToCartRequest(product: ProductData) {
  return {
    type: ActionType.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    },
  }
}

export function addProductToCartSuccess(product: ProductData) {
  return {
    type: ActionType.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product,
    },
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionType.ADD_PRODUCT_TO_CART_FAILURE,
    payload: {
      productId,
    },
  }
}

export enum ActionType {
  ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export type ProductData = {
  id: number
  title: string
  price: number
}

export type CartItem = {
  product: ProductData
  quantity: number
}

export interface CartState {
  items: CartItem[]
  failureStockCheck: number[]
}

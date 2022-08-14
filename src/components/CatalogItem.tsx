import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState } from '../store'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { ProductData } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: ProductData
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const hasFailureStockCheck = useSelector<GlobalState, boolean>((state) => {
    return state.cart.failureStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'  '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailureStockCheck && (
        <span style={{ color: 'red' }}>Falta de estoque</span>
      )}
    </article>
  )
}

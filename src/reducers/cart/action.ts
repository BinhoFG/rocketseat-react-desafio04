import { ProductType } from './../../contexts/CartContext'
export enum ActionTypes {
  ADD_NEW_PRODUCT_TO_CART = 'ADD_NEW_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export function addNewProductToCartAction(product: ProductType) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT_TO_CART,
    payload: {
      product,
    },
  }
}

export function removeProductFromCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  }
}

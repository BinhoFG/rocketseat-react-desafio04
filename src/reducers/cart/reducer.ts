import produce from 'immer'
import { ProductType } from './../../contexts/CartContext'
import { ActionTypes } from './action'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CartState {
  products: ProductType[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT_TO_CART:
      toast.success('Produto adicionado!', {
        position: 'top-center',
        autoClose: 2000,
      })

      return produce(state, (draft) => {
        draft.products.push(action.payload.product)
      })

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      )

      toast.success('Produto removido!', {
        position: 'top-center',
        autoClose: 2000,
      })

      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1)
      })
    }

    default:
      return state
  }
}

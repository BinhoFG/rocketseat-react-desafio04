import axios from 'axios'
import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewProductToCartAction,
  removeProductFromCartAction,
} from '../reducers/cart/action'
import { CartReducer } from '../reducers/cart/reducer'

export interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface CartContextType {
  products: ProductType[]
  addNewProductToCart: (product: ProductType) => void
  removeProductFromCart: (productId: string) => void
  buyProducts: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    products: [],
  })

  const { products } = cartState

  function addNewProductToCart(product: ProductType) {
    console.log(product)
    dispatch(addNewProductToCartAction(product))
  }

  function removeProductFromCart(productId: string) {
    dispatch(removeProductFromCartAction(productId))
  }

  const allPricesId = products.map((product) => product.defaultPriceId)

  async function buyProducts() {
    try {
      const response = await axios.post('/api/checkout', {
        productsPriceId: allPricesId,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar a uma ferramenta de observabilidade - Datadog / Sentry
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addNewProductToCart,
        removeProductFromCart,
        buyProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

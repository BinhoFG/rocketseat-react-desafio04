import { CloseButton, Content, ProductList, Title } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useState } from 'react'
import { CartItem } from './CartItem'
import { priceFormatter } from '../../util/formatter'

export function CartModal() {
  const { products, buyProducts } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const isCartEmpty = !products.length

  const totalPrice = products.reduce((acc, product) => {
    return (acc += product.price)
  }, 0)

  const totalPriceFormatted = priceFormatter.format(totalPrice)

  function handleBuyProducts() {
    setIsCreatingCheckoutSession(true)

    buyProducts()
  }

  return (
    <Dialog.Portal>
      <Content>
        <CloseButton asChild>
          <button>
            <X size={24} />
          </button>
        </CloseButton>

        <Title>Sacola de compras</Title>

        <ProductList>
          {products.map((product) => {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                defaultPriceId={product.defaultPriceId}
              />
            )
          })}
        </ProductList>

        <footer>
          <div>
            <span>Quantidade</span>
            <span>{products.length} items</span>
          </div>
          <div>
            <span className="total">Valor Total</span>
            <span className="price">{totalPriceFormatted}</span>
          </div>
          <button
            onClick={handleBuyProducts}
            disabled={isCartEmpty || isCreatingCheckoutSession}
          >
            Finalizar compra
          </button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}

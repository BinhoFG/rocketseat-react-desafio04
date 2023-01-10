import Image from 'next/image'
import { useContext } from 'react'
import { CartContext, ProductType } from '../../../contexts/CartContext'
import { priceFormatter } from '../../../util/formatter'
import { CartItemContainer } from './styles'

export function CartItem({ id, name, imageUrl, price }: ProductType) {
  const { removeProductFromCart } = useContext(CartContext)

  const priceFormatted = priceFormatter.format(price)

  function handleRemoveProductFromCart() {
    removeProductFromCart(id)
  }

  return (
    <CartItemContainer>
      <Image src={imageUrl} width={94} height={94} alt="" />
      <div>
        <span className="name">{name}</span>
        <span className="price">{priceFormatted}</span>
        <span className="remove" onClick={handleRemoveProductFromCart}>
          Remover
        </span>
      </div>
    </CartItemContainer>
  )
}

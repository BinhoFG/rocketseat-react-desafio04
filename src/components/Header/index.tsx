import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as Dialog from '@radix-ui/react-dialog'
import { CartModal } from '../CartModal'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <span className="icon">
            <Handbag size={24} weight="bold" color="#8D8D99" />
            <span className="counter">{products.length}</span>
          </span>
        </Dialog.Trigger>

        <CartModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}

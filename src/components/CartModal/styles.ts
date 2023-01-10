import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  width: 480,
  height: '100vh',
  top: 0,
  right: 0,
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',

  padding: '0 3rem 3rem',
  boxShadow: '-10px 0 15px black',

  footer: {
    position: 'absolute',
    bottom: '3rem',
    width: 384,
    padding: '1rem 1rem 0',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    'div + div': {
      fontWeight: 'bold',

      '.total': {
        fontSize: '$md',
      },

      '.price': {
        fontSize: '$xl',
      },
    },

    button: {
      padding: '0 2rem',
      marginTop: '3rem',
      height: 60,
      border: 0,
      borderRadius: 8,
      color: '$white',
      backgroundColor: '$green500',
      fontWeight: 'bold',
      fontSize: '$md',
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  width: 24,
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#8d8d99',
})

export const Title = styled(Dialog.Title, {
  marginTop: '4.5rem',
  marginBottom: '2rem',
  fontWeight: 'bold',
  fontSize: '$lg',
})

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: 300,

  'div + div': {
    marginTop: '1.5rem',
  },
})

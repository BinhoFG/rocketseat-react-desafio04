import { styled } from '../../../styles'

export const CartItemContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  width: 384,

  img: {
    marginRight: '1.25rem',
    width: 94,
    height: 94,
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    '.name': {
      fontSize: '$md',
    },

    '.price': {
      fontWeight: 'bold',
      fontSize: '$md',
    },

    '.remove': {
      fontWeight: 'bold',
      color: '$green500',
      marginTop: '0.5rem',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  '.icon': {
    position: 'relative',
    display: 'flex',
    height: 48,
    padding: '0.75rem',
    backgroundColor: '$gray800',
    borderRadius: 6,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#282828',
    },

    '.counter': {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      backgroundColor: '$green500',
      borderRadius: '50%',
      top: -6,
      right: -6,
      outline: '3px solid $gray900',
    },
  },
})

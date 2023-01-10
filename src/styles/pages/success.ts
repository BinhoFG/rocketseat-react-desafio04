import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    color: '$green500',
    textDecoration: 'none',
    fontSize: '$lg',
    display: 'block',
    marginTop: '5rem',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImgContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',

    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    padding: '0.25rem',
  },

  '.img:not(.img3)': {
    boxShadow: '-1px 1px 5px black',
  },

  '.img2': {
    position: 'absolute',
    left: 'calc(50vw + 10px)',
  },

  '.img3': {
    position: 'absolute',
    left: 'calc(50vw - 145px)',
    zIndex: '-1',
  },

  '.counter': {
    position: 'absolute',
    left: 'calc(50vw + 100px)',
    bottom: 'calc(50vh - 30px)',
    backgroundColor: '$white',
    padding: '0.25rem',
    borderRadius: '50%',
    color: '$green500',
  },
})

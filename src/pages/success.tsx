import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImgContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImgContainer>
          <Image
            className={`${products.length > 2 ? 'img' : ''} img1`}
            src={products[0].imageUrl}
            width={120}
            height={120}
            alt=""
          />
          {products.length > 1 && (
            <Image
              className="img img2"
              src={products[1].imageUrl}
              width={120}
              height={120}
              alt=""
            />
          )}
          {products.length > 2 && (
            <Image
              className="img img3"
              src={products[2].imageUrl}
              width={120}
              height={120}
              alt=""
            />
          )}
          {products.length > 3 && (
            <span className="counter">+{products.length - 3}</span>
          )}
        </ImgContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>
            {products.length === 1
              ? `${products.length} camiseta`
              : `${products.length} camisetas`}
          </strong>{' '}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((product) => {
    const stripeProduct = product.price.product as Stripe.Product
    return {
      name: stripeProduct.name,
      imageUrl: stripeProduct.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}

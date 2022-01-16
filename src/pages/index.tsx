import Head from "next/head"

import Image from "next/image"
import {GetStaticProps} from 'next'
import avatar from "../../public/images/Mulher.svg"
import { SubscribeButton } from "../components/SubScribeButton"
import styles from './home.module.scss'
import {stripe} from '../services/stripe'

interface HomeProps {
  product:{
    priceId:string,
    amount:number;
  }
}

export default function Home({product}:HomeProps) {



  return (
    <>
    <Head>
        <title>Home | ig.news</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all publications <br/>
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>

      <Image src={avatar} alt="Girl coding" />
    </main>
    </>
    
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KHxyODQFNvbJ7mVZpI7KxQv'
  );

  const product = {
    priceId:price.id,
    amount:new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD',
    }).format(price.unit_amount / 100),

  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
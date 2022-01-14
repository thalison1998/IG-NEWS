import Head from "next/head"
import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
    <Head>
        <title>IG news | home</title>
    </Head>
    <h1 className={styles.title}>
      hellow world
    </h1>
    </>
    
  )
}

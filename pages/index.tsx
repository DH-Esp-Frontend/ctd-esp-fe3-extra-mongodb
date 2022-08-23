import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../features/Footer'
import styles from '../styles/Home.module.css'
import { connectToDatabase } from '../utils/mongodb'

type Hotel = { 
  name: string,
  summary: string,
  room_type: string,
}

type Props = { isConnected: boolean, hotels: Hotel[] }

const Home: NextPage<Props> = ({isConnected, hotels}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.title}>
           Find the perfect hotel for your 
        </h1>

        <p className={styles.description}>
          {isConnected ? (
            <code>You are connected to</code>
          ) : (
            <code >
              You are NOT connected to
            </code>
          )}
          <code className={styles.mongo}> MongoDb</code>
        </p>

        <div className={styles.grid}>
            {/* aqui deberian ir las cards... */}
            {/* puedes usar los estilos creados para la clase .card */}
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async()=>{

  try{
    const { db } = await connectToDatabase()

    return {
      props: {
        isConnected: true,
        hotels: [] //Esto deberias cambiar por la informacion de db
      }
    } 
  }
  catch(e){
    return {
      props: {
        isConnected: false,
        hotels: []
      }
    } 
  }

}

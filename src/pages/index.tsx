import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { typeWriter } from '../infrastructure/utils'


const Home: NextPage = () => {

 useEffect(()=>{
  if(typeof window !== "undefined") typeWriter('.author-paper')
 }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Marincor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>

        <section className="container__author">
          <h2  className='author middle' data-text="Gabriel Claudino Marinho"> 
                <p className='firstname'>Gabriel</p>
                <p className='middlename'>Claudino</p>
                <p className='lastname'>Marinho</p>
          </h2>
          <p className='author-paper'>Desenvolvedor front-end</p>

          <div className="contianer__media">
              <a href="mailto:gabriel.cmunivos@protonmail.com" className='media-item'  rel="noopener noreferrer" target="_blank">E-mail</a>
              <a href="https://www.linkedin.com/in/gabriel-claudino-marinho-b88823179/" className='media-item'  rel="noopener noreferrer" target="_blank">Linkedin</a>
              <a href="https://github.com/Marincor" className='media-item'  rel="noopener noreferrer" target="_blank" >Github</a>
          </div>
        </section>

      <section className="container__author-img">
          <div className='author-img'/>
      </section>

      </main>
    </div>
  )
}

export default Home

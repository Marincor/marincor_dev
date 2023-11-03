import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { typeWriter } from '../infrastructure/utils'
import LanguageContext from '../store/language_context'


const Home: NextPage = () => {
  const {language} = useContext(LanguageContext);

 useEffect(()=>{
  if(typeof window !== "undefined") setTimeout(() => {
    // typeWriter('.author-paper', role[language].split(''))
  },1);
 }, []);

 const role = {
   "pt-BR": "Desenvolvedor Full Stack",
   "en-US": "Full Stack Developer"
 }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Marincor</title>
        <meta name="description" content="Gabriel Claudino Marinho - Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>

        <section className="container__author">
          <h2  className='author middle' data-text="Gabriel Claudino Marinho"> 
                <p className='firstname'>Gabriel</p>
                <p className='middlename'>Claudino</p>
                <p className='lastname'>Marinho</p>
          </h2>
          <p className='author-paper'>{role[language]}</p>

          <div className="container__media">
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

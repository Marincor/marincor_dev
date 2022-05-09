import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import LanguageContext from '../store/language_context'

const About: NextPage = () => {
  const {language} = useContext(LanguageContext);
  const content = {
    "pt-BR": {
      title: "Sobre",
      text: "  Olá, sou Gabriel Marinho, desenvolvedor front-end. Depois de ter estruturado uma conta digital na parte operacional do negócio, como analista de operações, piloto de reserva e analista QA, resolvi mudar para a área de tecnologia; Adoro aprender e busco dar o melhor de mim em todas as funções, com foco em melhoria de processos e novas implementações. Sou apaixonado por desenvolver e quero transformar uma ideia em algo real!"
    },
    "en-US": {
      title: "About",
      text: "Hello, I'm Gabriel Marinho, front-end developer. After structure a digital account in the operational area as operations analyst, reserve pilot in the bank account and QA analyst, changed to the tech area. I adore learning and want always to give my best in every function, with a focus on improving procedures and implement new features. I love coding and I want to transform an idea into something real!"
    }
  }
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marincor</title>
        <meta name="description" content="Gabriel Claudino Marinho - Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container__section'>
        <section className='container__title'>
          <h2 className='title'>
            {content[language].title}
          </h2>
        </section>
        <section className='container__content'>
          <p className="content">
          {content[language].text}
          </p>
        </section>

      </main>
    </div>
  )
}

export default About;

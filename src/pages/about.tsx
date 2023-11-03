import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import LanguageContext from '../store/language_context'

const About: NextPage = () => {
  const {language} = useContext(LanguageContext);
  const content = {
    "pt-BR": {
      title: "Sobre",
      text: "Olá, sou Gabriel Marinho, desenvolvedor full stack trabalhando atualmente com ReactJS, NextJS, Angular, Flutter, VTEX-IO, Golang e Python. Adoro aprender e busco dar o melhor de mim em todas as funções, especialmente melhorando processos e realizando novas implementações. Sou apaixonado por arquitetar soluções, desde o código, até os diagramas dos processos, testes e documentações, me mantendo atualizado  a respeito de boas práticas, novas versões das tecnologias utilizadas e desenvolvimento guiado às práticas de segurança (OWASP). Entendo que o produto que entrego impactará a vida do usuário final e por isso é importante fazer com qualidade e dedicação!"
    },
    "en-US": {
      title: "About",
      text: "Hello, I'm Gabriel Marinho, a software developer and I am working at this moment with ReactJS, NextJS, Angular, Flutter e VTEX-IO. I love to research software development. I am very dedicated to all activities that I work on, especially improving the process and implementing new features. I have a passion for architecting new solutions, from the code to the diagram of the process, tests, and documentation, that keep me updated on the good practices, new versions of the used technologies, and development guide by security practices (OWASP). I understand that the product delivered will impact the life of the final user and because of that, it is important to do it with quality and dedication!"
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

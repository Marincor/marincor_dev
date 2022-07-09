import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import LanguageContext from '../store/language_context'

const About: NextPage = () => {
  const {language} = useContext(LanguageContext);
  const content = {
    "pt-BR": {
      title: "Sobre",
      text: "Olá, sou Gabriel Marinho, desenvolvedor com foco em Front-end trabalhando atualmente com ReactJS, NextJS, Angular, Flutter e VTEX-IO;Tenho noções de Back-end também, já tendo trabalhado desenvolvendo projetos em Python e Golang. Adoro aprender e busco dar o melhor de mim em todas as funções, com foco em melhoria de processos e novas implementações. Sou apaixonado por arquitetar soluções, desde o código, até os diagramas dos processos, testes e documentações, me mantendo atualizado  a respeito de boas práticas, novas versões das tecnologias utilizadas e desenvolvimento guiado à práticas de segurança (OWASP). Entendo que o produto que entrego impactará a vida do usuário final e por isso é importante fazer com qualidade e dedicação!"
    },
    "en-US": {
      title: "About",
      text: "Hello, I'm Gabriel Marinho, developer. Have notion of Back-end too, already developing projects in Python and Golang. I love to learn and search and give my best always in all roles, with a focus on improving the process and implementing new features. I love to architecture new solutions, from the code to the diagram of the process, tests, and documentation, keeping me updated about the good practices, new versions of the used technologies, and development guide by security practices (OWASP). I understand that the product that I deliver will impact the life of the final user and because of that is important to do it with quality and dedication!"
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

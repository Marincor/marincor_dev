import Head from "next/head"
import { PortfolioProps } from "../interfaces/modules/portfolio";
import { PersonalProjects } from "./PersonalProjects";
import { useState } from "react"


const PortfolioContent = ({ type, setType, personal, redirectTo, language, goTo, companie }: PortfolioProps) => {

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
            Portfolio
          </h2>
        </section>
        <div className="project-options">
          <button onClick={() => setType('companies')}>
            {language === 'en-US'? 'Developed in companies' : 'Desenvolvido em empresas'}
          </button>
          <button onClick={() => setType('personal')}>
            {language === 'en-US'? 'Personal projects' : 'Projetos pessoais'}
          </button>
        </div>
        {
          type === 'personal' ?
            <PersonalProjects
              type={type}
              goTo={goTo}
              language={language}
              projects={personal}
              redirectTo={redirectTo}
              key="Personal"
            /> :
            <PersonalProjects
              type={type}
              goTo={goTo}
              language={language}
              projects={companie}
              redirectTo={redirectTo}
              key="companie"
            />
        }
      </main>
    </div>
  )
};

export default PortfolioContent;

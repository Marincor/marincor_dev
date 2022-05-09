import type { NextPage } from 'next'
import Head from 'next/head'
import { FaJs, FaReact } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTypescript, SiNextdotjs, SiAngular, SiFlutter, SiCypress, SiJest, SiJasmine, SiGoogle } from 'react-icons/si';
import { SkillsListModel } from '../infrastructure/interfaces/modules/skills';

const Skills: NextPage = () => {

  const skillsList: SkillsListModel[] = [
    {
      title: "HTML",
      icon: <SiHtml5 />
    },
    {
      title: "CSS",
      icon: <SiCss3 />
    },
    {
      title: "Javascript",
      icon: <FaJs />
    },
    {
      title: "Typescript",
      icon: <SiTypescript />
    },
    {
      title: "React JS",
      icon: <FaReact />
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs />
    },
    {
      title: "Angular",
      icon: <SiAngular />
    },
    {
      title: "Flutter",
      icon: <SiFlutter />
    },
    {
      title: "Cypress",
      icon: <SiCypress />
    },
    {
      title: "Jest",
      icon: <SiJest />
    },
    {
      title: "Jasmine",
      icon: <SiJasmine />
    },
    {
      title: "Goolang",
      icon: <SiGoogle />
    }
  ]

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
       
        <section className='container__title '>
          <h2 className='title'>
            Skills
          </h2>
        </section>
   
        <ul className="content__list wrapper">
     
          {
            skillsList.map((skill) => {
              return (
                <li className="content__item title" key={skill.title}>
                  <h3 className="title__content">
                    {skill.title}
                    {skill.icon}
                  </h3>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Skills;

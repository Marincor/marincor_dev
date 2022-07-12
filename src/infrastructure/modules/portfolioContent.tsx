import Head from "next/head"
import { useContext, useEffect, useState } from "react";
import { CgWebsite } from 'react-icons/cg';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { PortfolioModel } from "../interfaces/modules/portfolio";
import LanguageContext from "../../store/language_context";


const PortfolioContent = () => {
  const redirectTo = (route: string) => {
    window.open(route, "_blank")
  }
  const { language } = useContext(LanguageContext);
  const [ loading, setLoading ] = useState(true)
  const [projects, setProjects] = useState<PortfolioModel[]>([
    {
      link_code: "",
      link_site: "",
      project_description: {
        "en-US": "",
        "pt-BR": ""
      },
      project_img: "",
      project_name: "",
      tags: [
        {
          tag_name: ""
        }
      ]
    }
  ]);


  useEffect(() => {
    fetch("/api/projects").then(async (res) => {
      let project = await res.json();
      setProjects(project);
    });

    setLoading(false)
    
  }, []);



 

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
        <section className="container__portfolio-content">
          <ul className="portfolio__list">
            {
              !loading &&
              projects.map((project, index) => {
                return (
                  <li key={project.project_name} className="portfolio__item" style={{ background: `url(https://raw.githubusercontent.com/Marincor/marincor_dev/main/public/assets/imgs/projects/${project.project_img}.png)`, backgroundColor: "rgba(55, 54, 59, 0.5)", backgroundBlendMode: "color", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                  
                  >
                      <section className="actions">
                        <div className="action__code" title="Código" onClick={() => { redirectTo(`${project.link_code}`) }}>
                          {language === "en-US" ? "Code" : "Código"}
                          <BsFileEarmarkCodeFill />
                        </div>
                        <div className="action__code" title="Site" onClick={() => { redirectTo(`${project.link_site}`) }}>
                          Site
                          <CgWebsite />
                        </div>
                      </section>
                    
                    <h3 className="project__name">
                      {project.project_name}
                    </h3>
                    <p className="project__text">
                      {project.project_description[language]}
                    </p>
                    <ul className="tag__list">
                      {
                        project.tags.map((tag) => {
                          return (
                            <li key={tag.tag_name} className="tag__item">
                              <small className="tag__name">
                                {tag.tag_name}
                              </small>
                            </li>
                          )
                        })
                      }

                    </ul>
                  </li>
                )
              })
            }

          </ul>

        </section>
      </main>
    </div>
  )
};

export default PortfolioContent;
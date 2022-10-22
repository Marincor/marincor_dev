import { PersonalProjectProps } from "../interfaces/modules/portfolio"
import { CgWebsite } from 'react-icons/cg';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';

export const PersonalProjects = ({
    projects,
    redirectTo,
    language,
    type,
    goTo }: PersonalProjectProps ) => {
    return (
        <section className="container__portfolio-content">
        <ul className="portfolio__list">
          {
            projects?.map((project, index) => {
              return (<li key={project.project_name} className="portfolio__item" style={{ background: `url(https://raw.githubusercontent.com/Marincor/marincor_dev/main/public/assets/imgs/projects/${project.project_img}.png)`, backgroundColor: "rgba(55, 54, 59, 0.5)", backgroundBlendMode: "color", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}

              >
                <section className="actions">
                  <div className="action__code" title="Código" onClick={() => { redirectTo(`${project.link_code}`) }}>
                    {
                        type === 'personal' ?
                        <>
                             {language === "en-US" ? "Code" : "Código"}
                        </> :
                        <>
                             {language === "en-US" ? "Reference" : "Referência"}
                        </>
                    }
                    <BsFileEarmarkCodeFill />
                  </div>
                    {
                        type === "personal" &&  <div className="action__code" title="Site" onClick={() => { redirectTo(`${project.link_site}`) }}>
                        Site
                        <CgWebsite />
                      </div>
                    }
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
                        <li key={tag.tag_name} className="tag__item" onClick={() => goTo(`/portfolio/${tag.tag_name.toLocaleLowerCase().split(" ")[0]}`)}>
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
    )
}
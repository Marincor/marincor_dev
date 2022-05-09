// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectsModel } from '../../infrastructure/interfaces/models/projects'

const projectLanguage: ProjectsModel = {
  "pt-BR": [
    {
      link_code: "https://github.com/Marincor/Money-Control",
      link_site: "https://money-control.vercel.app/",
      project_name: "Money Control",
      project_description: "Aplicação para controle e gerenciamento de gastos. Foi criada com a ideia de ter uma visão macro sobre os gastos mensais e um comparativo de ganhos e custos em relação ao mês atual e o anterior do ano vigente.",
      project_img: "money_control",
      tags: [
        {
          tag_name: "Typescript",
        },
        {
          tag_name: "Next Js"
        },
        {
          tag_name: "Cypress"
        }
      ]
    }
  ],
  "en-US": [
    {
      link_code: "https://github.com/Marincor/Money-Control",
      link_site: "https://money-control.vercel.app/",
      project_name: "Money Control",
      project_description: "Application to control and manage your spending. It was built with the idea to have a macro vision about the month's spent and a comparison of the gains and costs in comparison with the current month and the year before this.",
      project_img: "money_control",
      tags: [
        {
          tag_name: "Typescript",
        },
        {
          tag_name: "Next Js"
        },
        {
          tag_name: "Cypress"
        }
      ]
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsModel>
) {
  res.status(200).json(projectLanguage)
}

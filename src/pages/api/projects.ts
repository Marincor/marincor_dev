// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioModel } from "../../infrastructure/interfaces/modules/portfolio";

const personalProjects: PortfolioModel[] = [
  {
    link_code: "https://github.com/Marincor/Money-Control",
    link_site: "https://money-control.vercel.app/",
    project_description: {
      "en-US":
        "Application to control and manage your spending. It was built with the idea to have a macro vision about the month's spent and a comparison of the gains and costs in comparison with the current month and the year before this.",
      "pt-BR":
        "Aplicação para controle e gerenciamento de gastos. Foi criada com a ideia de ter uma visão macro sobre os gastos mensais e um comparativo de ganhos e custos em relação ao mês atual e o anterior do ano vigente.",
    },
    project_img: "money_control",
    tags: [
      {
        tag_name: "Typescript",
      },
      {
        tag_name: "Next Js",
      },
      {
        tag_name: "Cypress",
      },
    ],
    project_name: "Money Control",
  },
  {
    link_code: "https://github.com/Marincor/Music-Climate",
    link_site: "http://music-climate.vercel.app/",
    project_description: {
      "pt-BR":
        "Uma playlist personalizada para onde quer que você esteja de acordo com a temperatura do local. API usada: Yahoo e Last-FM.",
      "en-US":
        "A custom playlist for wherever you are by temperature. Used API: Yahoo e Last-FM.",
    },
    project_img: "music_climate",
    project_name: "Music Climate",
    tags: [
      {
        tag_name: "Next Js",
      },
      {
        tag_name: "React Lottie",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/4dias_api",
    link_site: "https://app.swaggerhub.com/apis-docs/GABRIELCMUNIVOS/4_days/1.0.0#/",
    project_description: {
      "en-US": "Python(Flask) API to the open-source application 4 dias",
      "pt-BR": "API em Python(Flask) para o projeto open-source 4 dias"
    },
    project_img: "4days_api",
    project_name: "API - 4 dias",
    tags: [
      {
        tag_name: "Python",
      },
      {
        tag_name: "Flask"
      },
      {
        tag_name: "PostgreSQL"
      }
    ],
  },
  {
    link_code: "https://github.com/Marincor/4dias",
    link_site: "https://4dias.vercel.app/",
    project_description: {
      "en-US": "4 dias is an open-source project that I created with the purpose to aggregate all Brazilian companies that implemented the 4 days of work per week, to encourage the ones that have not implemented yet see the benefits of this new model.",
      "pt-BR": "4 dias é um projeto open-source que criei com o propósito de agregar todas as empresas brasileiras que implementaram 4 dias de trabalho por semana, para encorajar as que ainda não fizeram o mesmo a ver os benefícios desse novo modelo."
    },
    project_img: "4days",
    project_name: "4 dias",
    tags: [
      {
        tag_name: 'Angular'
      },
      {
        tag_name: "TypeScript"
      },
      {
        tag_name: "Sass"
      }
    ]
  },
  {
    link_code: "https://github.com/Marincor/amigo-oculto",
    link_site: "https://amigo-oculto.vercel.app/",
    project_description: {
      "en-US":
        "Application that prize draw pairs of names to secret friend with send of emails using Elastic Email API.",
      "pt-BR":
        "Aplicação que sorteia pares de nomes para amigo secreto com disparo de email utilizando a API da Elastic Email.",
    },
    project_img: "amigo_oculto",
    project_name: "Amigo Oculto",
    tags: [
      {
        tag_name: "TypeScript",
      },
      {
        tag_name: "Next Js",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/do-it",
    link_site: "https://do-it-murex.vercel.app/",
    project_description: {
      "en-US":
        "To-do list with a visual concept inspired by vaporWave. Was created using an API of the NextJS, makes requests of get, post, and delete for the features.",
      "pt-BR":
        "Lista de tarefas com conceito visual vaporWave. Foi criado uma API utilizando o serviço do próprio Next Js, fazendo requisições de get,post e delete para as funcionalidades apresentadas.",
    },
    project_img: "do_it",
    project_name: "Do iT",
    tags: [
      {
        tag_name: "TypeScript",
      },
      {
        tag_name: "Next JS",
      },
      {
        tag_name: "Styled-Components",
      },
      {
        tag_name: "Cypress",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/Liquid-Code-Web-Solutions",
    link_site: "http://liquid-code-web-solutions.vercel.app/",
    project_description: {
      "en-US": "Landing page site.",
      "pt-BR": "Landing page site.",
    },
    project_img: "liquid_code",
    project_name: "Liquid Code Web Solutions",
    tags: [
      {
        tag_name: "CSS",
      },
      {
        tag_name: "HTML",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/dices-pizza-parlor",
    link_site: "http://dices-pizza-restaurant.vercel.app/",
    project_description: {
      "en-US": "Online pizza parlor.",
      "pt-BR": "Pizzaria online.",
    },
    project_img: "dices",
    project_name: "Dice's",
    tags: [
      {
        tag_name: "React JS",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/Cidev",
    link_site: "https://cidev.vercel.app/",
    project_description: {
      "en-US": "Site in parallax.",
      "pt-BR": "Site em parallax.",
    },
    project_img: "cidev",
    project_name: "Cidev",
    tags: [
      {
        tag_name: "HTML",
      },
      {
        tag_name: "CSS",
      },
    ],
  },
  {
    link_code: "https://github.com/Marincor/netflix-clone",
    link_site: "https://netflix-clone-marincor.vercel.app/",
    project_description: {
      "en-US": "Study about page - a movie list based on the Netflix layout. Used API: The Movie Database",
      "pt-BR": "Estudo sobre pagina - uma lista de filmes baseada no layout da Netflix. API usada: The Movie Database." 
    },
    project_img: "netflix",
    project_name: "Netflix - Movie List Concept",
    tags: [
      {
        tag_name: "React Js"
      },
      {
        tag_name: "Styled-Components"
      }
    ]
  }
];

const companieProjects:  PortfolioModel[] = [
  {
    link_code: "https://www.youtube.com/watch?v=UmZqo4fSsgg",
    project_description: {
      "pt-BR":
        "Web App para o McDonalds e Coca-Cola LATAM (Argentina, Chile, Colômbia, Costa Rica, Equador, Peru, Panamá, México, Uruguai) - Gerar engajamento entre cliente e marca, distribuindo prêmios através de interatividade com a aplicação.",
      "en-US":
        "Web App to McDonalds and Coca-Cola LATAM (Argentina, Chile, Colômbia, Costa Rica, Equador, Peru, Panamá, México, Uruguai) - Generate engagement between customer and brand, distributing prizes through interactivity with the application.",
    },
    project_img: "cuenta_regressiva",
    project_name: "McDonald's & Coca-Cola: Cuenta Regresiva para Las Fiestas",
    tags: [
      {
        tag_name: "Next Js",
      },
      {
        tag_name: "SASS",
      },
    ],
  },
  {
    link_code: "https://www.mcdiafeliz.org.br/",
    project_description: {
      "pt-BR":
        "E-commerce para o Instituto Ronald McDonald feito para promover campanhas de arrecadação voltadas para o tratamento contra o câncer em crianças e adolescentes com incentivo do MCdia Feliz - Venda de produtos do Instituto, Doações e Cupons de desconto.",
      "en-US":
        "E-commerce for the Ronald McDonald Institute designed to promote fundraising campaigns aimed at cancer treatment for children and adolescents with the incentive of MCdia Feliz - Sale of Institute products, Donations and Discount Coupons.",
    },
    project_img: "irm",
    project_name: "Instituto Ronald McDonald (McDia Feliz) - 2022",
    tags: [
      {
        tag_name: "VTEX IO",
      },
      {
        tag_name: "React",
      },
    ],
  },
]

const allProjects =  {
  personal: personalProjects,
  companies: companieProjects
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioModel[]>
) {
  res.status(200).json(allProjects[req.query.type as 'companies' | 'personal']);
}

import { PortfolioModel } from "../interfaces/modules/portfolio";

export const getProjects = async (type: 'personal' | 'companies'): Promise<PortfolioModel[]> => {
    let url = "https://marincor-portfolio.vercel.app"
    const projects = await (await fetch(`${url}/api/projects?type=${type}`)).json();
    return projects;
}
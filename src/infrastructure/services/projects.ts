import { PortfolioModel } from "../interfaces/modules/portfolio";

export const getProjects = async (): Promise<PortfolioModel[]> => {
    let url= "https://marincor-portfolio.vercel.app"
    const projects = await (await fetch(`${url}/api/projects`)).json();
    return projects;
}
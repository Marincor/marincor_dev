export interface PortfolioModel {
    project_name: string;
    project_description: {
        "pt-BR": string;
        "en-US": string;
    };
    project_img: string;
    tags: TagsModel[];
    link_code: string;
    link_site: string;
}

interface TagsModel {
    tag_name: string;
}
export interface PortfolioModel {
    project_name: string;
    project_description: string;
    project_img: string;
    tags: TagsModel[];
    link_code: string;
    link_site: string;
}

interface TagsModel {
    tag_name: string;
}
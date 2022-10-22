import { languages } from "../languages";

export interface PortfolioModel {
    project_name: string;
    project_description: {
        "pt-BR": string;
        "en-US": string;
    };
    project_img: string;
    tags: TagsModel[];
    link_code: string;
    link_site?: string;
}

interface TagsModel {
    tag_name: string;
}

export interface PortfolioProps {
    personal: PortfolioModel[];
    companie: PortfolioModel[];
    redirectTo: (route: string) => void;
    language: languages;
    goTo: (route: string) => void;
    type: 'companies' | 'personal';
    setType: React.Dispatch<React.SetStateAction<"companies" | "personal">>
}

export interface PersonalProjectProps {
    projects: PortfolioModel[];
    redirectTo: (route: string) => void;
    language: languages;
    goTo: (route: string) => void;
    type: 'companies' | 'personal';
}
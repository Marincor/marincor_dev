import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/shared/spinner";
import { PortfolioModel } from "../../infrastructure/interfaces/modules/portfolio";
import PortfolioContent from "../../infrastructure/modules/portfolioContent";
import { getProjects } from "../../infrastructure/services/projects";
import { redirectTo } from "../../infrastructure/utils";
import LanguageContext from "../../store/language_context";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { label: 'next' } }, 
            { params: { label: 'react' }},
            { params: { label: 'typescript' }},
            { params: { label: 'cypress' }},
            { params: { label: 'flask' }},
            { params: { label: 'python' }},
            { params: { label: 'postgresql' }},
            { params: { label: 'angular' }},
            { params: { label: 'sass' }},
            { params: { label: 'css' }},
            { params: { label: 'html' }},
            { params: { label: 'styled-components' }},

        ],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: any) {
    return {
        props: {
            projects: await getProjects(),
        },
        revalidate: 43200
    }
}

const Label = (props: any) => {
    const { projects } = props;
    const router = useRouter();
    const { language } = useContext(LanguageContext);
    const [loading, setLoading] = useState(true);
    let label: string = router.query.label as string;

    let projectsFiltered: PortfolioModel[] = projects.filter((card: PortfolioModel) => (
        card.tags.some(tag => tag.tag_name.toLocaleUpperCase().includes(label.toUpperCase()))
    ));


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);

    }, []);

    const goTo = (route: string) => {
        if(!route.includes(label)) {
          setLoading(true);
          router.push(route);
         setTimeout(()=>{
            setLoading(false);
         }, 1000)
        } 
    }

    return (
        !loading ?
            <PortfolioContent language={language} projects={projectsFiltered} redirectTo={redirectTo} goTo={goTo} /> :
            <Spinner />
    )
}

export default Label;
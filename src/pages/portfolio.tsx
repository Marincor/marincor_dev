import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react';
import Spinner from '../components/shared/spinner';
import PortfolioContent from '../infrastructure/modules/portfolioContent';
import { getProjects } from '../infrastructure/services/projects';
import LanguageContext from '../store/language_context';

export async function getStaticProps() {

  return {
    props: {
      projects: await getProjects()
    }, 
    revalidate: 43200
  }
}

const Portfolio: NextPage = (props: any) => {
  const {projects} = props;

  const redirectTo = (route: string) => {
    window.open(route, "_blank")
  }
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, []);

  return (
    !loading ?
      <PortfolioContent language={language} projects={projects} redirectTo={redirectTo} /> :
      <Spinner/>
  )
}

export default Portfolio;

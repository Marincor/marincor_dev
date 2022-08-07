import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Spinner from '../components/shared/spinner';
import PortfolioContent from '../infrastructure/modules/portfolioContent';
import { getProjects } from '../infrastructure/services/projects';
import { redirectTo } from '../infrastructure/utils';
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
  const { projects } = props;

  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const label = router.query?.label as string;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, []);

  const goTo = (route: string) => {
    if (!route.includes(label)) {
      setLoading(true);
      router.push(route);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  }


  return (
    !loading ?
      <PortfolioContent language={language} projects={projects} redirectTo={redirectTo} goTo={goTo} /> :
      <Spinner />
  )
}

export default Portfolio;

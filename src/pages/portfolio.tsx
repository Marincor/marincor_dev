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
      personal: await getProjects('personal'),
      companies: await getProjects('companies'),
    },
    revalidate: 43200
  }
}

const Portfolio: NextPage = (props: any) => {
  const { personal, companies } = props;
  const [type, setType] = useState<'personal' | 'companies'>('companies');

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
      <PortfolioContent type={type} setType={setType} language={language} companie={companies} personal={personal} redirectTo={redirectTo} goTo={goTo} /> :
      <Spinner />
  )
}

export default Portfolio;

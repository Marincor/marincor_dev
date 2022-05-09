import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/shared/header'
import LanguageContext from '../store/language_context'
import { useEffect, useState } from 'react'
import { languages } from '../infrastructure/interfaces/languages'

function MyApp({ Component, pageProps }: AppProps) {
  const [ language, setLanguage] = useState<languages>("pt-BR")

  useEffect(()=>{
      if(window !== undefined) {
        let nav = window.navigator as any;
        let userLang = window.navigator.language || nav.userLanguage as any;
        if(userLang) setLanguage(userLang)
        else setLanguage("pt-BR")
      } 
  }, [])
  return (
    <>
    <LanguageContext.Provider value={{ language, setLanguage}}>
      <Header />
      <Component {...pageProps} />
    </LanguageContext.Provider>
    </>
  )
}

export default MyApp

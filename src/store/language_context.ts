import { createContext, SetStateAction } from "react";
import { languages } from "../infrastructure/interfaces/languages";


const LanguageContext = createContext({ language: 'pt-BR' as languages, setLanguage:(value: languages) => {}})

LanguageContext.displayName = "language";


export default LanguageContext;
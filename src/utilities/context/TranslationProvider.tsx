import { createContext, ReactNode, useContext, useState } from "react";
import { Localization } from "../models/localizations";
import rawTranslations from "../data/translations";

const translations: Localization = rawTranslations as Localization;

interface TranslationContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps>(
  {} as TranslationContextProps
);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<string>("en");

  const translate = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextProps => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

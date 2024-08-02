import React, { createContext, useContext, useState, ReactNode } from "react";
import { Localization } from "../types/localizations";
import rawTranslations from "../assets/translations.json";

const translations: Localization = rawTranslations as Localization;

interface TranslationContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

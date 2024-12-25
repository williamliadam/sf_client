import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorageState<"zh" | "en">("language", {
    defaultValue: navigator.language.startsWith("zh") ? "zh" : "en",
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return [language, setLanguage] as const;
};
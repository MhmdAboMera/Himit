import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Check if the language is already set in localStorage
if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'ar');
}
const savedLanguage = localStorage.getItem('i18nextLng') || 'ar';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: savedLanguage,
    debug: false, // remove console 
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "htmlTag",
        "querystring",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;

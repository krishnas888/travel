import i18n from "i18next";
import { initReactI18next, } from "react-i18next";
import resources from "../../locales/index";
import { LanguageDetector } from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng:"en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
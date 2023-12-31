import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pageLinkAz from "../data/az/pageLinkAz";
import pageLinkEn from "../data/en/pageLinkEn";
import pageLinkRu from "../data/ru/pageLinkRu";

const resources = {
  az: {
    translation: {
      pageLinks: pageLinkAz,
      followUs: "Bizi izlə :",
      shopNow: "İndi alış-veriş edin",
    },
  },
  en: {
    translation: {
      pageLinks: pageLinkEn,
      followUs: "Follow Us :",
      shopNow: "Shop now",
    },
  },
  ru: {
    translation: {
      pageLinks: pageLinkRu,
      followUs: "Подписывайтесь на нас :",
      shopNow: "Купить сейчас",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "az",
    fallbackLng: "az",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

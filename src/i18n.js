import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      project: 'Project',
      contact: 'Contact',
    },
  },
  ko: {
    translation: {
      home: '홈',
      about: '소개',
      project: '프로젝트',
      contact: '연락',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 기본 언어 설정
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
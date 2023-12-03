// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const loadProjects = async (lang) => {
//   try {
//     const response = await fetch(`../db.json`);
//     const data = await response.json();
//     return data.project;
//   } catch (error) {
//     console.error('프로젝트 로딩 중 오류 발생:', error);
//     return [];
//   }
// };

// const resources = {
//   ko: {
//     translation: {
//       project: await loadProjects('ko'),
//     },
//   },
//   en: {
//     translation: {
//       project: await loadProjects('en'),
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'ko', // Default language
//   interpolation: {
//     escapeValue: false, // React already escapes by default
//   },
// });

// export default i18n;
import netflix from '../img/netflix.jpg';
import acnestudio from '../img/acnestudio.JPG';
import gyeongbokgung from '../img/gyeongbokgung.JPG';
import emotiondiary from '../img/emotiondiary.JPG';
import catmbti from '../img/catmbti.JPG';
import mealkit from '../img/mealkit.jpg'

export const ProjectData = [
  {
    id: 1,
    display: 'desktop',
    title: 'TVING',
    skills: ["css", "react", "redux", "styledcomponents"],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${netflix}`
  },
  {
    id: 2,
    display: 'desktop',
    title: '감정일기',
    skills: ['typescript', 'react'],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${emotiondiary}`
  },
  {
    id: 3,
    display: 'desktop',
    title: 'ACNE STUDIO',
    skills: ["react", "json"],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${acnestudio}`,
    url: "https://kyjkyj9329-acnestudios.netlify.app/"
  },
  {
    id: 4,
    display: 'desktop',
    title: 'MBTI 테스트',
    skills: ["react"],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${catmbti}`,
    url: "https://kyjkyj9329-mbti-test.netlify.app"
  },
  {
    id: 5,
    display: 'desktop',
    title: '[팀 프로젝트] 경복궁 웹 사이트',
    skills: ["html", 'css', 'javascript'],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${gyeongbokgung}`,
    url: "https://daman-gyeongbokgung.netlify.app/"
  },
  {
    id: 6,
    display: 'mobile',
    title: '밀키트 모바일 사이트',
    skills: ["css", "react", "redux"],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${mealkit}`
  },
  {
    id: 7,
    display: 'mobile',
    title: 'MobileData',
    skills: ['typescript', 'react'],
    desc: ['미디어쿼리를 이용한 반응형/적응형 구현', '지역 기반 마커 클러스터링 구현'],
    image: `${emotiondiary}`
  },
]
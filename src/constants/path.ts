export const BROWSER_PATH = {
  MAIN: '',
  ADMIN: {
    MAIN: '/admin',
    USER: '/admin',
    EVENT: '/admin/event',
  },
  EVENT: {
    MAIN: '/event',
    ALL: '/event/all',
    MY: '/event/my',
    UPCOMING: '/event/upcoming',
  },
  CALENDAR: '/calender',
  SEARCH: '/search',
  INTRO: '/intro',
  OAUTH: '/oauth',
  SIGNUP: '/signup',
  MYPAGE: '/',
  INFO: '/info',
};

// const API_PATH = {

// }

export const PREV_PATH_KEY = 'PREV_PATH';

export const KAKAO_REDIRECT_URL = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

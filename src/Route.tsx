import React from 'react';

import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PageLayout } from './components/shared';
import { BROWSER_PATH } from './constants/path';
import enMessages from './i18n/messages/en.json';
import koMessages from './i18n/messages/ko.json';
import Admin from './pages/Admin';
import Calendar from './pages/Calendar';
import { AllEvent, DetailEvent, MyEvent, UpcomingEvent } from './pages/Event';
import Intro from './pages/Intro';
import Main from './pages/Main';
import MainRoot from './pages/Main/MainRoot';
import NotFound from './pages/NotFound';
import Oauth from './pages/Oauth';
import Search from './pages/Search';
import Signup from './pages/Signup';
import { RootState } from './store';

const router = createBrowserRouter([
  {
    path: BROWSER_PATH.MAIN,
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: BROWSER_PATH.EVENT.ALL,
        element: <AllEvent />,
      },
      {
        path: BROWSER_PATH.EVENT.MY,
        element: <MyEvent />,
      },
      {
        path: BROWSER_PATH.EVENT.UPCOMING,
        element: <UpcomingEvent />,
      },
      {
        path: BROWSER_PATH.CALENDAR,
        element: <Calendar />,
      },
      {
        path: BROWSER_PATH.SEARCH,
        element: <Search />,
      },
    ],
  },
  {
    path: BROWSER_PATH.EVENT.MAIN,
    element: <DetailEvent />,
    children: [
      {
        path: `${BROWSER_PATH.EVENT.MAIN}/:eventId`,
        element: <DetailEvent />,
      },
    ],
  },
  {
    path: BROWSER_PATH.INTRO,
    element: (
      <PageLayout>
        <Intro />
      </PageLayout>
    ),
  },
  {
    path: BROWSER_PATH.OAUTH,
    element: (
      <PageLayout>
        <Oauth />
      </PageLayout>
    ),
  },
  {
    path: BROWSER_PATH.ADMIN,
    element: (
      <PageLayout>
        <Admin />
      </PageLayout>
    ),
  },
  {
    path: BROWSER_PATH.SIGNUP,
    element: (
      <PageLayout>
        <Signup />
      </PageLayout>
    ),
  },
  {
    path: '*',
    element: (
      <PageLayout>
        <NotFound />
      </PageLayout>
    ),
  },
]);

const Route: React.FC = () => {
  const locale = useSelector((state: RootState) => state.locale.locale);

  const messages = locale === 'ko' ? koMessages : enMessages;

  //
  //
  //

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <RouterProvider router={router} />
      </IntlProvider>
    </>
  );
};

export default Route;

import React from 'react';

import {
  useRoutes,
  RouteObject,
} from 'react-router-dom';

import { Main } from '../components/Main/Main';
import { HomePage } from '../components/HomePage/HomePage';

const MainRoutes = {
    MAIN: '/',
    HOME: '/home-page'
}

export const routes = [
    {
        path: MainRoutes.MAIN,
        element: <Main />,
    },
    {
        path: MainRoutes.HOME,
        element: <HomePage />,
    }
]

export const Router = () => useRoutes(routes);

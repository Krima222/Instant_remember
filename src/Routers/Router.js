import React from 'react';

import {
  useRoutes,
  RouteObject,
} from 'react-router-dom';

import { Main } from '../components/Main/Main';
import { PostPage } from '../components/Main/PostPage/PostPage';
import { SettingsPage } from "../components/Main/SettingsPage/SettingsPage";
import { GoalsPage } from '../components/Main/GoalsPage/GoalsPage';
import { NewsFeedPage } from '../components/Main/NewsFeedPage/NewsFeedPage';
import { ProfilePage } from '../components/Main/ProfilePage/ProfilePage';

const MainRoutes = {
    MAIN: '/',
    PROFILE: '/',
    FEED: '/news-feed-page',
    GOALS: '/goals-page',
    POST: '/post-page',
    SETTINGS: '/settings-page',
}

export const routes = [
    {
        path: MainRoutes.MAIN,
        element: <Main />,
        children: [
            {
                path: MainRoutes.PROFILE,
                element: <ProfilePage />
            },
            {
                path: MainRoutes.FEED,
                element: <NewsFeedPage />
            },
            {
                path: MainRoutes.GOALS,
                element: <GoalsPage />
            },
            {
                path: MainRoutes.POST,
                element: <PostPage />
            },
            {
                path: MainRoutes.SETTINGS,
                element: <SettingsPage />
            }
        ]
    },
]

export const Router = () => useRoutes(routes);

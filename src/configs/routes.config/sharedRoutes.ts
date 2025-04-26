import type { Routes } from '@/@types/routes'
import { lazy } from 'react'

/**
 * Shared routes configuration
 * Routes defined here will be accessible to both authenticated and unauthenticated users
 */
const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'about',
        path: `/about`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'contact',
        path: `/contact`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
]

export default sharedRoutes

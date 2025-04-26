import type { Routes } from '@/@types/routes'
import { lazy } from 'react'

/**
 * Shared routes configuration
 * Routes defined here will be accessible to both authenticated and unauthenticated users
 */
const sharedRoutes: Routes = [
    // Add shared routes here
    {
        key: 'about',
        path: `/about`,
        component: lazy(() => import('@/views/Home')), // Using Home component as an example
        authority: [],
    },
    {
        key: 'contact',
        path: `/contact`,
        component: lazy(() => import('@/views/Home')), // Using Home component as an example
        authority: [],
    },
]

export default sharedRoutes

import type { Routes } from '@/@types/routes'
import { lazy } from 'react'

/**
 * Auth routes configuration
 * Routes defined here will be used for authentication purposes only
 */
const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'homePage',
        path: `/hello`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
]

export default authRoute

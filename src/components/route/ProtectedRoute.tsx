import { useAuth } from '@/auth'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()

    const { pathname } = useLocation()

    const getPathName =
        pathname === '/' ? '' : `?${REDIRECT_URL_KEY}=${location.pathname}`

    // Only redirect if we're not already at the unAuthenticatedEntryPath
    return !authenticated && pathname !== unAuthenticatedEntryPath ? (
        <Navigate replace to={`${unAuthenticatedEntryPath}${getPathName}`} />
    ) : (
        <Outlet />
    )
}

export default ProtectedRoute

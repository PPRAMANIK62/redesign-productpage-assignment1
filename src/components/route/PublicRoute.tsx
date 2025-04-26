import { useAuth } from '@/auth'
import appConfig from '@/configs/app.config'
import { Navigate, Outlet } from 'react-router-dom'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()

    // Only redirect if authenticatedEntryPath is not the current path
    return authenticated &&
        window.location.pathname !== authenticatedEntryPath ? (
        <Navigate to={authenticatedEntryPath} />
    ) : (
        <Outlet />
    )
}

export default PublicRoute

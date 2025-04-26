import type { LayoutType } from '@/@types/theme'
import { useAuth } from '@/auth'
import PageContainer from '@/components/template/PageContainer'
import appConfig from '@/configs/app.config'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppRoute from './AppRoute'
import AuthorityGuard from './AuthorityGuard'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const { user } = useAuth()

    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />}>
                {/* Only redirect if authenticatedEntryPath is not already "/" */}
                {authenticatedEntryPath !== '/' && (
                    <Route
                        path="/"
                        element={
                            <Navigate replace to={authenticatedEntryPath} />
                        }
                    />
                )}
                {protectedRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={
                            <AuthorityGuard
                                userAuthority={user.authority}
                                authority={route.authority}
                            >
                                <PageContainer {...props} {...route.meta}>
                                    <AppRoute
                                        routeKey={route.key}
                                        component={route.component}
                                        {...route.meta}
                                    />
                                </PageContainer>
                            </AuthorityGuard>
                        }
                    />
                ))}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        }
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default AllRoutes

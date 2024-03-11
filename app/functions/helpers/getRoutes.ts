import { privateRoutes, publicRoutes } from '@/functions/constants/routes'

export function profileRoutes({
  isAuthenticated
}: {
  isAuthenticated: boolean
}) {
  const authRoutes = isAuthenticated ? privateRoutes.profile.primary : []

  const routes = [
    ...publicRoutes.profile.primary,
    ...authRoutes,
    ...publicRoutes.profile.secondary
  ]

  return routes
}

export function mypageRoutes() {
  return privateRoutes.mypage.primary
}

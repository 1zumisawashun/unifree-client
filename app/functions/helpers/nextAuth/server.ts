import { authOptions } from '@/functions/libs/nextAuth'
import { getServerSession } from 'next-auth'

export async function auth() {
  const session = await getServerSession(authOptions)
  const isAuthenticated = !!session

  return { session, isAuthenticated }
}

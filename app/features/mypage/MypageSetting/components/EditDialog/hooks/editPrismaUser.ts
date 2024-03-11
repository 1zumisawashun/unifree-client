import { UpsertUser } from '@/features/mypage/user.model'
import { API } from '@/functions/constants/api'

type Props = { userId: number } & UpsertUser

export async function editPrismaUser({ userId, ...rest }: Props) {
  const url = API.editPrismaUser(userId)

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(rest)
  })

  return response.ok
}

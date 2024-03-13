import { API } from '@/functions/constants/api'

type Props = {
  uid: string
  picture?: string
}

export async function createPrismaUser({ uid, picture }: Props) {
  const url = API.createPrismaUser

  console.log(uid, '==============================')

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ uid, photoURL: picture, displayName: null })
  })

  const json = await response.json()
  return json.id
}

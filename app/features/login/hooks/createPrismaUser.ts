import { API } from '@/functions/constants/api'

type Props = {
  uid: string
  picture?: string
}

export async function createPrismaUser({ uid, picture }: Props) {
  const url = API.createPrismaUser

  console.log(
    { uid, photoURL: picture, displayName: null },
    '①=============================='
  )

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ uid, photoURL: picture, displayName: null })
  })
  console.log(response, '②==============================')
  const json = await response.json()
  console.log(json, '③==============================')
  return json.id
}

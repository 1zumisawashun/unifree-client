import { prisma } from '@/functions/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

type Json = {
  uid: string
  photoURL: string | null
  displayName: string | null
}

export async function POST(req: NextRequest) {
  console.log(req, '②10 ==============================')
  if (req.method === 'POST') {
    console.log(req, '②⓪==============================')
    const json: Json = await req.json()
    console.log(json, '②①==============================')

    try {
      // findfirstorthrowだとスルーの方が優先される？
      const user = await prisma.user.findUniqueOrThrow({
        where: { uid: json.uid }
      })
      console.log(user, '②②==============================')

      return NextResponse.json({ id: user.id })
    } catch (err) {
      const user = await prisma.user.create({
        data: json
      })
      return NextResponse.json({ id: user.id })
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 })
  }
}

import { prisma } from '@/functions/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

type Json = {
  userId: number
  matchId: number
  message: string
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const json: Json = await req.json()

    try {
      const response = await prisma.message.create({
        data: json
      })

      return NextResponse.json({ response })
    } catch (err) {
      return new NextResponse(`Method Not Allowed`, { status: 405 })
    }
  } else {
    return new NextResponse(`Method Not Allowed`, { status: 405 })
  }
}

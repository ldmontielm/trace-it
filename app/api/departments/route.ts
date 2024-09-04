import { type NextRequest } from 'next/server'
import { GetDeparments } from '../utils'

export async function GET(request: NextRequest){
    const data = await GetDeparments()
    return Response.json({ departments: data })
}
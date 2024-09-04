import { type NextRequest } from 'next/server'
import { GetCitiesByDepartment } from '../utils'

export async function GET(request: NextRequest){

    const searchParams = request.nextUrl.searchParams
    const department = searchParams.get('department') || ''
    if(department === ''){
        return Response.json({message: 'No hay ciudades emitida.'})
    }else{
        const data = await GetCitiesByDepartment(department)
        return Response.json(data )
    }
}
import { promises as fs } from "fs";
import path from "path";

export interface Department {
    id: number
    departamento: string
    ciudades: string[]
}


export async function GetDataToJson():Promise<Department[]>{
    const jsonDirectory = path.join(process.cwd(), 'public/json_cities')
    const fileContent = await fs.readFile(jsonDirectory + '/colombia.min.json', 'utf8')
    const data = JSON.parse(fileContent)
    return data
}

export async function GetCitiesByDepartment(department_query: string):Promise<Department>{
    const data = await GetDataToJson()
    const cities = data.filter((department) => department.departamento == department_query)
    return cities[0]
}

export async function GetDeparments():Promise<string[]> {
    const data = await GetDataToJson()
    const departments: string[] = []
    data.forEach((department) => {
        departments.push(department.departamento)
    })
    return departments
}
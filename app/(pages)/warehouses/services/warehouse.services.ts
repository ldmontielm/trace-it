import { AxiosInstance } from "@/lib/axios.intances"
import { Warehouse } from "../models"
import axios from "axios"

interface DepartmentsResponse {
    departments: string[]
}

export interface Department {
    id: number
    departamento: string
    ciudades: string[]
}


export const GetAllWarehousesAction = async ():Promise<Warehouse[]> => {
    const { data } = await AxiosInstance.get<Warehouse[]>('/warehouses')
    return data
}

export const GetDepartmentsService = async ():Promise<DepartmentsResponse> => {
    const { data } = await axios.get<DepartmentsResponse>('/api/departments')
    return data
}

export const GetCitiesByDepartmentsService = async (department: string):Promise<Department> => {
    const { data } = await axios.get<Department>(`/api/cities?department=${department}`)
    return data
}
"use server"

import { AxiosInstance } from "@/lib/axios.intances";
import { Warehouse } from "../models";


export async function GetAllWarehousesAction(): Promise<Warehouse[]>{
    const { data } = await AxiosInstance.get<Warehouse[]>('/warehouses')
    return data
}

export async function GetWarehouseByIdAction(id: string): Promise<Warehouse>{
    const { data } = await AxiosInstance.get<Warehouse>(`/warehouses/${id}`)
    return data
}

export async function CreateWarehouseAction(formData:FormData): Promise<Warehouse>{
    const createWarehouse = {
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city')
    }
    const { data } = await AxiosInstance.post('/warehouses', createWarehouse)
    return data
}

export async function DisableWarehouseAction(formData: FormData): Promise<Warehouse>{
    const id = formData.get('id')
    const { data } = await AxiosInstance.post(`/warehouses/${id}/inactive-warehouse`)
    return data
}

export async function EnableWarehouseAction(formData: FormData): Promise<Warehouse>{
    const id = formData.get('id')
    const { data } = await AxiosInstance.post(`/warehouses/${id}/active-warehouse`)
    return data
}
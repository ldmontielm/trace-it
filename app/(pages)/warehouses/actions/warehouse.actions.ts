"use server"

import { AxiosInstance } from "@/lib/axios.intances";
import { Warehouse } from "../models";

export async function GetWarehouseByIdAction(id: string): Promise<Warehouse>{
    const { data } = await AxiosInstance.get<Warehouse>(`/warehouses/${id}`)
    return data
}

export async function CreateWarehouseAction(formData:FormData): Promise<Warehouse>{
    const createWarehouse = {
        name: formData.get('name'),
        city: formData.get('city'),
        address: formData.get('address'),
        status: "active"
    }
    console.log(createWarehouse)
    const { data } = await AxiosInstance.post('/warehouses', createWarehouse)
    return data
}

export async function DisableWarehouseAction(formData: FormData): Promise<Warehouse>{
    const id = formData.get('id')
    const { data } = await AxiosInstance.put(`/warehouses/${id}/inactive-warehouse`)
    return data
}

export async function EnableWarehouseAction(formData: FormData): Promise<Warehouse>{
    const id = formData.get('id')
    const { data } = await AxiosInstance.put(`/warehouses/${id}/active-warehouse`)
    return data
}
"use server"

import { AxiosInstance } from "@/lib/axios.intances"
import { Supplier } from "../models"

export async function CreateSupplierAction(formData: FormData):Promise<Supplier>{
    const registerSupplier = {
        nit: formData.get('nit'),
        name: formData.get('name'),
        company: formData.get('company'),
        address: formData.get('address'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        city: formData.get('city'),
    }
    const { data } = await AxiosInstance.post<Supplier>('/suppliers', registerSupplier)
    return data
}

export async function EditSupplierAction(formData: FormData):Promise<Supplier>{
    const id = formData.get('id')

    const editSupplier = {
        nit: formData.get('nit'),
        name: formData.get('name'),
        company: formData.get('company'),
        address: formData.get('address'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        city: formData.get('city'),
    }
    console.log("URL: " + `/suppliers/${id}`)
    
    const { data } = await AxiosInstance.put<Supplier>(`/suppliers/${id}`, editSupplier)

    return data 
}

export async function DisableSupplierAction(formData: FormData){
    const id = formData.get('id')

    const { data } = await AxiosInstance.put(`/suppliers/${id}/inactive-supplier`)
    return data
}

export async function EnableSupplierAction(formData: FormData){
    const id = formData.get('id')

    const { data } = await AxiosInstance.put(`/suppliers/${id}/enable-supplier`)
    return data
}
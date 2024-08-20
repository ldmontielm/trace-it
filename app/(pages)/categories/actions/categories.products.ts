"use server"

import { AxiosInstance } from "@/lib/axios.intances"

export async function CreateCategoryAction(formData: FormData) {
    const name = formData.get('name')
    
    const categoryCreate = {
        name
    }

    const { data } = await AxiosInstance.post('/categories', categoryCreate)
    return data
}

export async function EnableCategoryAction(formData: FormData){
    const id = formData.get('id')

    const { data } = await AxiosInstance.put(`/categories/${id}/active-category`)
    return data
}

export async function DisableCategoryAction(formData: FormData){
    const id = formData.get('id')
    
    const { data } = await AxiosInstance.put(`/categories/${id}/inactive-category`)
    return data
}

export async function EditCategoryAction(formData: FormData){
    const id = formData.get('id')
    const name = formData.get('name')

    const categoryEdit = {name}

    const { data } =  await AxiosInstance.put(`/categories/${id}`, categoryEdit)
    return data
}
import { AxiosInstance } from "@/lib/axios.intances";
import { Product } from "../models";

interface Category {
    id: string
    created_at: string
    status: string
    name: string
}

interface Warehouse {
    id: string
    address: string
    city: string
    name: string
}

export const GetAllProducts = async ():Promise<Product[]> => {
    const { data } = await AxiosInstance.get<Product[]>('/products')
    return data
}

export const GetAllCategories = async ():Promise<Category[]> => {
    const { data } = await AxiosInstance.get<Category[]>('/categories')
    return data
}

export const GetAllWarehouses = async ():Promise<Warehouse[]> => {
    const { data } = await AxiosInstance.get<Warehouse[]>('/warehouses')
    return data
}

export const GetProductById = async (id: string): Promise<Product> => {
    const { data } = await AxiosInstance.get<Product>(`/products/${id}`)
    return data
}
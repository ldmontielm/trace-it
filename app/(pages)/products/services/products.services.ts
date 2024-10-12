import { AxiosInstance } from "@/lib/axios.intances";
import { Product } from "../models";

export const GetAllProducts = async ():Promise<Product[]> => {
    const { data } = await AxiosInstance.get<Product[]>('/products')
    return data
}

export const GetProductById = async (id: string): Promise<Product> => {
    const { data } = await AxiosInstance.get<Product>(`/products/${id}`)
    return data
}
import { AxiosInstance } from "@/lib/axios.intances";
import { Supplier } from "../models";

export const GetAllSuppliers = async ():Promise<Supplier[]> => {
    const { data } = await AxiosInstance.get<Supplier[]>('/suppliers')
    return data
}

export const GetSupplierById = async (id: string):Promise<Supplier> => {
    const { data } = await AxiosInstance.get<Supplier>(`/suppliers/${id}`)
    return data
}
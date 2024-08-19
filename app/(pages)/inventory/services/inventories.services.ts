import { AxiosInstance } from "@/lib/axios.intances";
import { Inventory } from "../models";

export const GetAllInventories = async ():Promise<Inventory[]> => {
    const { data } = await AxiosInstance.get<Inventory[]>('/inventories')
    return data
}
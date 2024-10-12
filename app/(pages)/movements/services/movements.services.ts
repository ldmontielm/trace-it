import { AxiosInstance } from "@/lib/axios.intances";
import { Movement } from "../models";

export const GetAllMovements = async ():Promise<Movement[]> => {
    const { data } = await AxiosInstance.get<Movement[]>('/inventories/movements')
    return data
}
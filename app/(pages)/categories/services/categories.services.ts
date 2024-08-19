"use server"

import { AxiosInstance } from "@/lib/axios.intances";
import { Category } from "../models";

const GetAllCategories = async ():Promise<Category[]> => {
    const { data } = await AxiosInstance.get<Category[]>('/categories')
    return data
}
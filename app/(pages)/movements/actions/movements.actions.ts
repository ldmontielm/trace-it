import { AxiosInstance } from "@/lib/axios.intances"
import { Movement } from "../models"

export async function CreateMovementAction(formData:FormData): Promise<Movement>{
    const createMovements = {
        type: formData.get('type'),
        quantity: formData.get('quantity'),
        note: formData.get('note'),
        product_id: formData.get('product')
    }

    const { data } = await AxiosInstance.post('/inventories/movements/create-movement', createMovements)
    return data
}
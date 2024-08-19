import { AxiosInstance } from "@/lib/axios.intances"

export async function SetQuantityAction(formData: FormData){
    const id = formData.get("id")
    const quantity = Number(formData.get("quantity"))

    const { data } = await AxiosInstance.post(`/inventories/${id}/set-quantity`, {quantity})
    return data
}
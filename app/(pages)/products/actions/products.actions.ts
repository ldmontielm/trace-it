"use server"

import { AxiosInstance } from "@/lib/axios.intances"

export async function SendDataAction(formData: FormData) {
    const percentage = formData.get("percentage") === 'undefined' ? 0 : Number(formData.get("percentage"))
    const fixed_price = formData.get("fixed_price") === 'undefined' ? 0 : Number(formData.get("fixed_price"))
    const iva = formData.get("iva") === 'undefined' ? 0 : Number(formData.get("iva"))

    const registerProduct = {
        name: formData.get("name"),
        price: Number(formData.get("price")),
        category_id: formData.get("category"),
        percentage: percentage,
        discount_type: formData.get("discount_type"),
        taxes_class: formData.get("taxes_class"),
        fixed_price: fixed_price,
        iva: iva,
        status: formData.get("status"),
        inventory: {
            quantity: Number(formData.get("quantity")),
            sku: formData.get("sku"),
            barcode: formData.get("barcode"),
            product_id: "",
            location_id: "" 
        },
        location: {
            fulllocation: formData.get("fulllocation"),
            warehouse_id: formData.get("warehouse"),
        },
    }
    const { data } = await AxiosInstance.post('/products', registerProduct)
    return data
}

export async function DisableProductAction(id: string){
    const { data } = await AxiosInstance.put(`/products/${id}/inactive-product`)
    return data
}

export async function AvailableProductAction(id: string){
    const { data } = await AxiosInstance.put(`/products/${id}/available-product`)
    return data
}
import { Inventory } from "../../inventory/models"

export interface Product {
    id: string
    category: string
    name: string
    images: string[]
    sku: string
    price: number
    quantity: number
    status: string
    inventory: Inventory
    discount_type: 'no_discount'|'porcentage'|'fixed_price'
    fixed_price: number
    taxes_class: 'tax_free'| 'taxable_goods'| 'downloadable_product'
    iva: number
}
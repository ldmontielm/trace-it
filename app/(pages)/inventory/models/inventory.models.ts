import { Product } from "../../products/models"

export interface Inventory {
    id: string
    quantity: number
    sku: string
    barcode: string
    product: Product
    location: Location
}

export interface Location {
    id: string
    warehouse: Warehouse
    fulllocation: string
}
  
export interface Warehouse {
    id: string
    name: string
    city: string
    address: string
}
  
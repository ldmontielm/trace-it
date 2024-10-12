export interface Inventory {
    id: string
    quantity: number
    sku: string
    barcode: String
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
  
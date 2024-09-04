export interface Product {
    id: string
    category: string
    name: string
    images: string[]
    sku: string
    price: number
    quantity: number
    status: string
    discount_type: 'no_discount'|'porcentage'|'fixed_price'
    fixed_price: number
    taxes_class: 'tax_free'| 'taxable_goods'| 'downloadable_product'
    iva: number
}
import { z } from "zod";
import { UseFormReturn } from 'react-hook-form';

export const formSchema = z.object({
    name: z.string({
        required_error: "Nombre requerido",
        invalid_type_error: "El nombre debe ser una cadena de texto",
    }).min(2).max(200),
    quantity: z.coerce.number({
        required_error: "Cantidad requerido",
        invalid_type_error: "La cantidad debe ser un número",
    }),
    sku: z.string().min(2).max(50),
    price: z.coerce.number({
        required_error: "Precio requerido",
        invalid_type_error: "El precio debe ser un número",
    }),
    category: z.string({
        required_error: "Categoría requerida",
        invalid_type_error: "La categoría debe ser una cadena de texto",
    }),
    warehouse: z.string({
        required_error: "Almacén requerida",
        invalid_type_error: "El Almacén debe ser una cadena de texto",
    }),
    fulllocation: z.string({
        required_error: "Almacén requerida",
        invalid_type_error: "El Almacén debe ser una cadena de texto",
    }),
    discount_type: z.enum(['no_discount', 'porcentage', 'fixed_price'], {
        required_error: "Necesitas seleccionar un tipo de descuento.",
    }),
    percentage: z.coerce.number().optional(),
    taxes_class: z.enum(['tax_free', 'taxable_goods', 'downloadable_product'], {
        required_error: "Necesitas seleccionar una clase de impuesto.",
    }),
    barcode: z.coerce.number({
        required_error: "barcode requerido",
        invalid_type_error: "El código de barras debe ser un número",
    }),
    fixed_price: z.coerce.number().optional(),
    iva: z.coerce.number().optional(),
    status: z.enum(['available', 'scarce', 'terminated', 'inactive'], {
        required_error: "Necesitas seleccionar un estado.",
    }),
});

export interface PropsForm {
    form: UseFormReturn<{ 
        name: string
        quantity: number
        sku: string
        price: number
        category: string
        warehouse: string
        percentage?: number | undefined
        fulllocation: string
        discount_type: 'no_discount'|'porcentage'|'fixed_price'
        taxes_class: 'tax_free'| 'taxable_goods'| 'downloadable_product'
        barcode: number
        fixed_price?: number | undefined
        iva?: number | undefined
        status: 'available' | 'scarce' | 'terminated' | 'inactive'
    }>
}
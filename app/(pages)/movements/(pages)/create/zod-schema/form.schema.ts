import { z } from "zod";
import { UseFormReturn } from 'react-hook-form';

export const formSchema = z.object({
    quantity: z.coerce.number({
        required_error: "Cantidad requerido",
        invalid_type_error: "La cantidad debe ser un número",
    }),
    product: z.string({
        required_error: "Almacén requerida",
        invalid_type_error: "El Almacén debe ser una cadena de texto",
    }),
    type: z.string({
        required_error: "Almacén requerida",
        invalid_type_error: "El Almacén debe ser una cadena de texto",
    }),
    note: z.string().optional(),
});

export interface PropsForm {
    form: UseFormReturn<{ 
        quantity: number,
        product: string,
        type: string
        note?: string | undefined,
    }>
}
import { z } from "zod";

export const formSchema = z.object({
    nit: z.string().min(2, {
        message: "El NIT debe tener más de dos caracteres.",
    }),
    name: z.string().min(2, {
        message: "El nombre debe tener más de dos caracteres.",
    }),
    company: z.string().min(2, {
        message: "La compañía debe tener más de dos caracteres.",
    }),
    address: z.string().min(2, {
        message: "La dirección debe tener más de dos caracteres.",
    }),
    email: z.string().min(2, {
        message: "El correo debe tener más de dos caracteres.",
    }),
    phone: z.string().min(2, {
        message: "El teléfono debe tener más de dos caracteres.",
    }),
    city: z.string().min(2, {
        message: "La ciudad debe tener más de dos caracteres.",
    }),
});
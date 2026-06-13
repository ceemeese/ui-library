import { z } from 'zod';

export const registerSchema = z.object({
    dni: z.string().min(1, 'Obligatorio'),
    name: z.string().min(1, 'Obligatorio'),
    lastName: z.string().min(1, 'Obligatorio'),
    username: z.string().min(1, 'Obligatorio'),
    email: z.email('Introduce un email correcto'),
    phoneNumber: z
        .string()
        .min(1, 'Obligatorio')
        .max(9, 'Max 9 dígitos')
        .regex(/^[0-9]+$/, 'Solo números'),
    password: z
        .string()
        .min(8, 'Mínimo 8 carácteres')
        .max(15,'Máximo 15 carácteres')
        .refine((val) => /[A-Z]/.test(val), {message: 'Al menos una mayúscula',})
        .refine((val) => /[a-z]/.test(val), {message: 'Al menos una minúscula',})
        .refine((val) => /[0-9]/.test(val), {message: 'Almenos menos un número',})
        .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {message: 'Al menos un símbolo',}),
});

export type RegisterData = z.infer<typeof registerSchema>;
import { z } from 'zod';

export const registerSchema = z.object({
    dni: z.string().min(1, 'El dni es obligatorio'),
    name: z.string().min(1, 'El nombre es obligatorio'),
    lastName: z.string().min(1, 'El apellido es obligatorio'),
    username: z.string().min(1, 'El apodo es obligatorio'),
    email: z.email('Introduce un email correcto'),
    phoneNumber: z
        .string()
        .min(1, 'El teléfono es obligatorio')
        .max(9, 'El teléfono no puede tener más de 9 números')
        .regex(/^[0-9]+$/, 'El teléfono solo puede contener números'),
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
import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'El usuario es obligatorio'),
  password: z.string()
  .min(6, 'La contraseña debe tener al menos 8 caracteres')
  .refine((val) => /[A-Z]/.test(val), {
      message: 'Debe contener al menos una mayúscula',
    })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Debe contener al menos una minúscula',
    })
    .refine((val) => /[0-9]/.test(val), {
      message: 'Debe contener al menos un número',
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: 'Debe contener al menos un símbolo',
    }),
});

export type LoginData = z.infer<typeof loginSchema>;
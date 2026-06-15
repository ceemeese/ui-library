import { z } from 'zod';
export declare const registerSchema: z.ZodObject<{
    dni: z.ZodString;
    name: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    email: z.ZodEmail;
    phoneNumber: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type RegisterData = z.infer<typeof registerSchema>;

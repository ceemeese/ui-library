import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginData = z.infer<typeof loginSchema>;

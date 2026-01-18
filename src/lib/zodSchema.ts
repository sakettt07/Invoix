import z from 'zod';
export const onboardingSchema=z.object({
    firstName:z.string().min(3,{message:"Firstname is required "}).max(15,{message:"Max 50 characters"}),
    lastName:z.string().min(3,{message:"Lastname is required "}).max(15,{message:"Max 50 characters"}),
    currency:z.string().min(3,{message:"Select a currency "}).optional()})
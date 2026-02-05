"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { currencyoption } from "@/lib/utils";
import { onboardingSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface UserEditProfile {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | null | undefined;
    currency: string | undefined;
}
export default function UserEditProfilePage({ firstName, lastName, email, currency }: UserEditProfile) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<z.infer<typeof onboardingSchema>>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            currency: currency,
            firstName: firstName,
            lastName: lastName
        }
    });
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit = async (data: z.infer<typeof onboardingSchema>) => {
        try {
            setLoading(true);
            const respone = await fetch('/api/user', {
                method: "put",
                body: JSON.stringify(data)
            });
            const responseData = await respone.json();
            if (respone.status === 200) {
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
                <Label>First Name</Label>
                <Input placeholder="Raj" type="text" {...register("firstName", { required: true })} disabled={loading} />
                {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName.message}</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label>Last Name</Label>
                <Input placeholder="Kumar" type="text" {...register("lastName", { required: true })} disabled={loading} />
                {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName.message}</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label>Select Currency</Label>
                <Select disabled={loading} onValueChange={(value) => {
                    setValue("currency", value, { shouldValidate: true })
                }} defaultValue="USD">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(currencyoption).map((item: string, index: number) => {
                            return (<SelectItem key={index} value={item}>{item}</SelectItem>)
                        })}
                    </SelectContent>
                </Select>
                <input type="hidden" {...register("currency")} />
            </div>
            <div className="grid gap-2">
                <Label>Email</Label>
                <Input placeholder="example@abc.com" value={email ?? ""} required type="email" disabled={true} />
            </div>
            <Button disabled={loading}>{loading ? "Please wait..." : "Update Profile"}</Button>
        </form>
    )
}
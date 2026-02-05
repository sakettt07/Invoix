'use client'
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectValue, SelectTrigger, SelectContent } from "@/components/ui/select";
import { currencyoption } from "@/lib/utils";
import { onboardingSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Value } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function OnboardingPage() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<z.infer<typeof onboardingSchema>>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            currency: "USD",
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
                router.push("/dashboard");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center flex-col min-h-dvh h-dvh overflow-auto relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <Card className="min-w-xs lg:min-w-sm w-full max-w-sm">
                <CardHeader>
                    <CardTitle>You are almost finished
                    </CardTitle>
                    <CardDescription>
                        Enter your information to create and account
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                            <Input placeholder="Kumar" type="email" disabled={true} />
                        </div>
                        <Button disabled={loading}>{loading ? "Please wait..." : "Finish onboarding"}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
// 3:32
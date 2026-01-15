'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
    const router = useRouter();
    return (
        <Card className="min-w-xs lg:min-w-sm">
            <CardHeader className="flex flex-col gap-3 items-center">
                <CardTitle>Check your Email..</CardTitle>
                <CardDescription className="text-sm">
                    We have send a verification link to your email address..
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center gap-2 p-4 bg-yellow-50 text-yellow-600">
                    <AlertCircle className="size-5" />
                    <span>Check you spam folder too.</span>
                </div>
                <Button onClick={() => router.back()} variant={"outline"} className="w-full">
                    <ArrowLeft className="size-4 text-black" />
                    Back to Login
                </Button>
            </CardContent>
        </Card>
    )
}
// 1:08:41
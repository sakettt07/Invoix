"use client"
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (
        <Button>
            {pending ? "Please Wait..." : title}
        </Button>
    )
}
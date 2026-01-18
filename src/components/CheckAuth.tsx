// component for protected pages

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function ProtectedPage() {
    const session = await auth();

    if (!session) {
        redirect("/login")
    }
    return (
        <></>
    )
}
export async function UnprotectedPage() {
    const session = await auth();
    if (session) {
        if(!session.user.firstName ||!session.user.lastName){
            redirect('/onboarding')
        }
        redirect('/dashboard');
    }
    return <></>

}
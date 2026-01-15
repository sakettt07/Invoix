// component for protected pages

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function ProtectedPage(){
    const session=await auth();

    if(!session){
        redirect("/login")
    }
    return (
        <></>
    )
}
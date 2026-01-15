import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./mongo_db";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    providers: [
        Resend({
            from: "Invoix <onboarding@resend.dev>"
        })
    ],
    pages: {
        error: "/login",
        verifyRequest: "/verify-email",
        signIn: "/login"
    }
})
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function PUT() {
    try {

    } catch (error: any) {
        return NextResponse.json({
            message: error || error.message || "Something went wrong"
        })
    }
}
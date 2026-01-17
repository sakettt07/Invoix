import { auth } from "@/lib/auth";
import UserModel from "@/models/user.model";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const { firstName, lastName, currency } = await request.json();
        const session = await auth();
        if (!session) {
            return NextResponse.json({
                message: "Unauthorized access"
            }, {
                status: 401
            })
        }
        const userDetails = await UserModel.findByIdAndUpdate(session.user?.id, {
            firstName, lastName, currency
        });
        return NextResponse.json({
            message: "User updated successfully"
        })

    } catch (error: any) {
        return NextResponse.json({
            message: error || error.message || "Something went wrong"
        })
    }
}
import { ProtectedPage } from "@/components/CheckAuth";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <ProtectedPage />
        </main>
    )
}
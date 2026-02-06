import { ProtectedPage } from "@/components/CheckAuth";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { Suspense } from "react";
import DashboardSidebar from "./_component/DashboardSidebar";
import UserProfileDropDown from "./_component/UserProfileDropdown";
import DashboardHeader from "./_component/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {/* Side bar */}
            <DashboardSidebar>
                <UserProfileDropDown isFullName isArrowUp />
            </DashboardSidebar>
            <main className="w-full relative">
                <DashboardHeader />
                <Suspense fallback={<p>Loading...</p>}>
                    {children}
                </Suspense>
                <ProtectedPage />
            </main>
        </SidebarProvider>
    )
}
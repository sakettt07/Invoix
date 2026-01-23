import { ProtectedPage } from "@/components/CheckAuth";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import DashboardSidebar from "./_component/DashboardSidebar";
import UserProfileDropDown from "./_component/UserProfileDropdown";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {/* Side bar */}
            <DashboardSidebar>
                <UserProfileDropDown />
            </DashboardSidebar>
            <main>
                {children}
                <ProtectedPage />
            </main>
        </SidebarProvider>
    )
}
'use client'
import Logo from "@/components/Logo";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BookAIcon, LayoutDashboardIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// this is my dashboard sidebar
export default function DashboardSidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarHeader className="px-6 mt-1">
                <Logo />
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/dashboard"} className={cn(pathname === "/dashboard" && "bg-[#ffbb5d]")}>
                                <LayoutDashboardIcon />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/invoice"} className={cn(pathname === "/invoice" && "bg-[#ffbb5d]")}>
                                <BookAIcon />
                                <span>Invoice</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/settings"} className={cn(pathname === "/settings" && "bg-[#ffbb5d]")}>
                                <SettingsIcon />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                {children}
            </SidebarFooter>
        </Sidebar>
    )
}
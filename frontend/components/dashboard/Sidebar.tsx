"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Files,
    Share2,
    Settings,
    Trash2,
    Cloud,
    Plus,
    ShieldCheck
} from "lucide-react"

import { UploadModal } from "@/components/dashboard/UploadModal"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const pathname = usePathname()

    const routes = [
        {
            label: "Overview",
            icon: LayoutDashboard,
            href: "/dashboard",
            active: pathname === "/dashboard",
        },
        {
            label: "My Vault",
            icon: ShieldCheck,
            href: "/dashboard/vault",
            active: pathname === "/dashboard/vault",
        },
        {
            label: "Recent Files",
            icon: Files,
            href: "/dashboard/recent",
            active: pathname === "/dashboard/recent",
        },
        {
            label: "Shared",
            icon: Share2,
            href: "/dashboard/shared",
            active: pathname === "/dashboard/shared",
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/dashboard/settings",
            active: pathname === "/dashboard/settings",
        },
        {
            label: "Trash",
            icon: Trash2,
            href: "/dashboard/trash",
            active: pathname === "/dashboard/trash",
        },
    ]

    return (
        <div className={cn("pb-12 h-screen border-r border-white/10 bg-black/40 backdrop-blur-xl", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="flex items-center pl-3 mb-14">
                        <ShieldCheck className="h-8 w-8 text-primary mr-2" />
                        <h2 className="text-xl font-bold tracking-tight text-white">
                            SecureVault
                        </h2>
                    </div>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                    route.active ? "text-white bg-white/10" : "text-muted-foreground"
                                )}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.active ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                                    {route.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="px-3 py-2">
                    <UploadModal>
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]">
                            <Plus className="mr-2 h-4 w-4" />
                            Upload New
                        </Button>
                    </UploadModal>
                </div>

                <div className="px-3 py-6 mt-auto absolute bottom-0 w-full">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <Cloud className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-white">Storage</span>
                        </div>
                        <Progress value={33} className="h-2 mb-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>5GB used</span>
                            <span>15GB total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

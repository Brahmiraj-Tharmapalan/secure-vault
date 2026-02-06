"use client"

import { Bell, Menu, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/dashboard/Sidebar"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full h-16 border-b border-white/10 bg-black/40 backdrop-blur-xl flex items-center px-4 md:px-6 gap-4">
            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-white">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 border-r-white/10 bg-black/90 w-72">
                    <Sidebar className="border-none w-full h-full" />
                </SheetContent>
            </Sheet>

            {/* Search Bar (Hidden on small mobile) */}
            <div className="hidden md:flex relative flex-1 max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search files..."
                    className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus-visible:ring-primary/50"
                />
            </div>

            <div className="flex-1 md:flex-none" />

            {/* Right Actions */}
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8 border border-white/10">
                                <AvatarImage src="/avatars/01.png" alt="@user" />
                                <AvatarFallback className="bg-primary/20 text-primary">SV</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-black/90 border-white/10 text-white" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">User Name</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    user@example.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white">
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white">
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white">
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem className="focus:bg-white/10 focus:text-white text-red-400">
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

import { Metadata } from "next"
import Link from "next/link"
import { FileIcon, ImageIcon, MoreVertical, ShieldCheck, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
    title: "My Vault - SecureVault",
    description: "Manage your encrypted files.",
}

export default function VaultPage() {
    const files = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        name: `encrypted_file_${i + 1}.${i % 2 === 0 ? 'jpg' : 'pdf'}`,
        type: i % 2 === 0 ? 'Image' : 'Document',
        size: '2.4 MB',
        date: '2 hours ago',
    }))

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">My Vault</h2>
                    <p className="text-muted-foreground">
                        Securely stored and encrypted files.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="border-white/10 hover:bg-white/10 hover:text-white">
                        List View
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                        Grid View
                    </Button>
                </div>
            </div>

            <Separator className="bg-white/5" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {files.map((file) => (
                    <Link href={`/dashboard/files/${file.id}`} key={file.id} className="block group">
                        <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                            <div className="aspect-square bg-black/20 relative flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                {/* Encryption Icon Layer */}
                                <div className="absolute top-3 right-3">
                                    <ShieldCheck className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                                </div>

                                {/* Main Icon */}
                                {file.type === 'Image' ? (
                                    <ImageIcon className="h-12 w-12 text-muted-foreground group-hover:text-white transition-colors" />
                                ) : (
                                    <FileText className="h-12 w-12 text-muted-foreground group-hover:text-white transition-colors" />
                                )}
                            </div>
                            <div className="p-3">
                                <div className="flex items-start justify-between">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-white truncate text-nowrap">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {file.size} • {file.date}
                                        </p>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 text-muted-foreground hover:text-white">
                                                <MoreVertical className="h-3 w-3" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-black/90 border-white/10 text-white">
                                            <DropdownMenuItem>Download</DropdownMenuItem>
                                            <DropdownMenuItem>Share</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

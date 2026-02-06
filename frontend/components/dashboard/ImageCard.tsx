"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Download, Share2, Trash2, FileImage } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface ImageCardProps {
    id: string
    filename: string
    url?: string
    thumbnailUrl?: string
    fileSize: string
    uploadedAt: string
    className?: string
}

export function ImageCard({
    id,
    filename,
    url,
    thumbnailUrl,
    fileSize,
    uploadedAt,
    className
}: ImageCardProps) {
    return (
        <div className={cn("group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]", className)}>
            {/* Image Preview / Thumbnail */}
            <div className="aspect-square relative flex items-center justify-center bg-black/20">
                {thumbnailUrl ? (
                    <Image
                        src={thumbnailUrl}
                        alt={filename}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                ) : (
                    <FileImage className="h-12 w-12 text-white/20" />
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-primary hover:bg-white/10" title="View" asChild>
                        <Link href={`/dashboard/files/${id}`}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-primary hover:bg-white/10" title="Download">
                        <Download className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-primary hover:bg-white/10" title="Share">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Footer / Metadata */}
            <div className="p-3">
                <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                        <Link href={`/dashboard/files/${id}`} className="hover:underline decoration-white/50">
                            <p className="font-medium text-sm text-white truncate" title={filename}>
                                {filename}
                            </p>
                        </Link>
                        <p className="text-xs text-muted-foreground">
                            {fileSize} • {uploadedAt}
                        </p>
                    </div>

                    {/* More Options Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-white">
                                <span className="sr-only">Open menu</span>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5 fill-current"
                                >
                                    <path
                                        d="M3.625 7.5C3.625 8.32843 2.95343 9 2.125 9C1.29657 9 0.625 8.32843 0.625 7.5C0.625 6.67157 1.29657 6 2.125 6C2.95343 6 3.625 6.67157 3.625 7.5ZM8.625 7.5C8.625 8.32843 7.95343 9 7.125 9C6.29657 9 5.625 8.32843 5.625 7.5C5.625 6.67157 6.29657 6 7.125 6C7.95343 6 8.625 6.67157 8.625 7.5ZM13.625 7.5C13.625 8.32843 12.9534 9 12.125 9C11.29657 9 10.625 8.32843 10.625 7.5C10.625 6.67157 11.29657 6 12.125 6C12.9534 6 13.625 6.67157 13.625 7.5Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 bg-black/90 border-white/10 text-white backdrop-blur-xl">
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href={`/dashboard/files/${id}`}>
                                    <Eye className="mr-2 h-4 w-4" /> View Details
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Download className="mr-2 h-4 w-4" /> Download
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Share2 className="mr-2 h-4 w-4" /> Share
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem className="text-red-400 focus:text-red-400 cursor-pointer">
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

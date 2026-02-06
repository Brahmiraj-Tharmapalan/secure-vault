import { Metadata } from "next"
import Link from "next/link"
import { Clock, File, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
    title: "Recent Files - SecureVault",
    description: "Your recently accessed files.",
}

export default function RecentPage() {
    const recentFiles = Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        name: `project_document_${i}.pdf`,
        size: '1.2 MB',
        modified: `${i + 5} mins ago`,
        folder: 'Documents',
    }))

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Recent Files</h2>
                <p className="text-muted-foreground">
                    Files you've worked on lately.
                </p>
            </div>

            <Separator className="bg-white/5" />

            <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/5 bg-white/5 grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Name</div>
                    <div className="col-span-3">Modified</div>
                    <div className="col-span-2">Size</div>
                    <div className="col-span-1"></div>
                </div>
                <div className="divide-y divide-white/5">
                    {recentFiles.map((file) => (
                        <div key={file.id} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-white/5 transition-colors group">
                            <div className="col-span-6 flex items-center gap-3">
                                <div className="p-2 rounded bg-primary/10 text-primary">
                                    <File className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-medium text-white">{file.name}</span>
                            </div>
                            <div className="col-span-3 text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-3 w-3" />
                                {file.modified}
                            </div>
                            <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                            <div className="col-span-1 text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

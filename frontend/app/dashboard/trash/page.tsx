import { Metadata } from "next"
import { Trash2, RefreshCw, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export const metadata: Metadata = {
    title: "Trash - SecureVault",
    description: "Manage deleted files.",
}

export default function TrashPage() {
    const deletedFiles = Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        name: `deleted_file_${i + 1}.png`,
        size: '1.2 MB',
        deletedAt: `${i + 1} days ago`,
    }))

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Trash</h2>
                <p className="text-muted-foreground">
                    Items in trash will be permanently deleted after 30 days.
                </p>
            </div>

            <Separator className="bg-white/5" />

            <Alert className="bg-red-500/10 border-red-500/20 text-red-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                    Files deleted from here cannot be recovered.
                </AlertDescription>
            </Alert>

            <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/5 bg-white/5 grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Name</div>
                    <div className="col-span-3">Date Deleted</div>
                    <div className="col-span-3 text-right">Actions</div>
                </div>
                <div className="divide-y divide-white/5">
                    {deletedFiles.map((file) => (
                        <div key={file.id} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-white/5 transition-colors">
                            <div className="col-span-6 flex items-center gap-3">
                                <div className="p-2 rounded bg-red-500/10 text-red-500">
                                    <Trash2 className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{file.size}</p>
                                </div>
                            </div>
                            <div className="col-span-3 text-sm text-muted-foreground">
                                {file.deletedAt}
                            </div>
                            <div className="col-span-3 flex items-center justify-end gap-2">
                                <Button variant="ghost" size="sm" className="hover:bg-green-500/10 hover:text-green-500">
                                    <RefreshCw className="h-4 w-4 mr-1" />
                                    Restore
                                </Button>
                                <Button variant="ghost" size="sm" className="hover:bg-red-500/10 hover:text-red-500">
                                    Delete Forever
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Button variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20">
                    Empty Trash
                </Button>
            </div>
        </div>
    )
}

import { Metadata } from "next"
import { Users, File, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
    title: "Shared - SecureVault",
    description: "Manage shared files and collaborators.",
}

export default function SharedPage() {
    const sharedFiles = Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        name: `collaborative_doc_${i + 1}.docx`,
        size: '5.6 MB',
        sharedBy: i % 2 === 0 ? 'Alice Smith' : 'Bob Jones',
        date: '1 day ago',
    }))

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Shared</h2>
                <p className="text-muted-foreground">
                    Files shared with you and by you.
                </p>
            </div>

            <Separator className="bg-white/5" />

            <Tabs defaultValue="with_me" className="w-full">
                <TabsList className="bg-white/5 border border-white/5">
                    <TabsTrigger value="with_me">Shared with me</TabsTrigger>
                    <TabsTrigger value="by_me">Shared by me</TabsTrigger>
                </TabsList>

                <TabsContent value="with_me" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sharedFiles.map((file) => (
                            <div key={file.id} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-primary/50 transition-all group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 rounded bg-primary/10 text-primary">
                                        <File className="h-6 w-6" />
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-muted-foreground hover:text-white">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-black/90 border-white/10 text-white">
                                            <DropdownMenuItem>Download</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-400">Remove</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <h3 className="font-medium text-white truncate mb-1">{file.name}</h3>
                                <p className="text-xs text-muted-foreground mb-4">{file.size} • {file.date}</p>

                                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={`https://avatar.vercel.sh/${file.sharedBy}`} />
                                        <AvatarFallback>{file.sharedBy[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-xs text-muted-foreground">
                                        Shared by <span className="text-white">{file.sharedBy}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="by_me" className="mt-6">
                    <div className="text-center py-10 text-muted-foreground">
                        <Users className="h-10 w-10 mx-auto mb-3 opacity-20" />
                        <p>You haven't shared any files yet.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

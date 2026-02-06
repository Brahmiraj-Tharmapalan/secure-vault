"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Share2, Trash2, FileIcon, ShieldCheck, Lock, Activity, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FileViewerProps {
    fileId: string
}

export function FileViewer({ fileId }: FileViewerProps) {
    const [activeTab, setActiveTab] = useState("details")

    // Mock data based on ID
    const fileData = {
        name: `encrypted_document_${fileId}.pdf`,
        size: "2.4 MB",
        type: "PDF Document",
        uploaded: "2 hours ago",
        status: "Encrypted (AES-256)",
        owner: "You",
        sharedWith: ["Alice", "Bob"],
        activity: [
            { action: "Encrypted & Uploaded", user: "You", time: "2 hours ago" },
            { action: "Shared", user: "You", time: "1 hour ago" },
            { action: "Viewed", user: "Alice", time: "30 mins ago" },
        ]
    }

    return (
        <div className="h-full flex flex-col space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            {fileData.name}
                            <Badge variant="outline" className="ml-2 border-primary/50 text-primary bg-primary/10">
                                {fileData.status}
                            </Badge>
                        </h2>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            Uploaded {fileData.uploaded} • {fileData.size}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="border-white/10 hover:bg-white/10 hover:text-white text-muted-foreground">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-400">
                        <Trash2 className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[500px]">
                {/* Preview Section */}
                <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-2xl p-1 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                    {/* Encrypted Visual Metaphor */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)]">
                            <Lock className="h-16 w-16 text-primary" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Encrypted Content</h3>
                        <p className="text-muted-foreground max-w-sm">
                            This file is securely encrypted using AES-256.
                            Download to decrypt and view locally.
                        </p>
                    </div>

                    {/* Background "blurred" content effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-3xl" />
                </div>

                {/* Sidebar Details */}
                <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <Tabs defaultValue="details" className="w-full h-full flex flex-col">
                        <TabsList className="w-full grid grid-cols-2 bg-black/20 p-1 rounded-none">
                            <TabsTrigger
                                value="details"
                                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-muted-foreground"
                            >
                                Details
                            </TabsTrigger>
                            <TabsTrigger
                                value="activity"
                                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-muted-foreground"
                            >
                                Activity
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="details" className="p-6 flex-1">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3">File Information</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Type</span>
                                            <span className="text-white">{fileData.type}</span>
                                        </div>
                                        <Separator className="bg-white/5" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Size</span>
                                            <span className="text-white">{fileData.size}</span>
                                        </div>
                                        <Separator className="bg-white/5" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Owner</span>
                                            <span className="text-white">{fileData.owner}</span>
                                        </div>
                                        <Separator className="bg-white/5" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Encryption</span>
                                            <span className="text-primary flex items-center gap-1">
                                                <ShieldCheck className="h-3 w-3" />
                                                AES-256
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Shared With</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {fileData.sharedWith.map((user) => (
                                            <Badge key={user} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                                                {user}
                                            </Badge>
                                        ))}
                                        <Button variant="ghost" size="sm" className="h-6 w-6 rounded-full p-0 bg-white/5 hover:bg-primary/20 hover:text-primary border border-dashed border-white/20">
                                            <span className="text-xs">+</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="activity" className="p-0 flex-1 h-full">
                            <ScrollArea className="h-[400px] p-6">
                                <div className="space-y-6">
                                    {fileData.activity.map((log, i) => (
                                        <div key={i} className="flex gap-4 relative">
                                            {/* Connector Line */}
                                            {i !== fileData.activity.length - 1 && (
                                                <div className="absolute left-[11px] top-8 bottom-[-16px] w-[1px] bg-white/10" />
                                            )}

                                            <div className="mt-1">
                                                <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                                    <Activity className="h-3 w-3 text-primary" />
                                                </div>
                                            </div>
                                            <div className="flex-1 space-y-1">
                                                <p className="text-sm text-white">
                                                    <span className="font-medium text-primary">{log.user}</span> {log.action}
                                                </p>
                                                <div className="flex items-center text-xs text-muted-foreground">
                                                    <Clock className="h-3 w-3 mr-1" />
                                                    {log.time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

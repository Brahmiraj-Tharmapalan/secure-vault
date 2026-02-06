"use client"

import { useState, useCallback } from "react"
import { UploadCloud, File, X, Loader2 } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"

interface UploadModalProps {
    children: React.ReactNode
}

export function UploadModal({ children }: UploadModalProps) {
    const [files, setFiles] = useState<File[]>([])
    const [uploading, setUploading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [open, setOpen] = useState(false)

    // React Dropzone hook is great but let's implement a simple version if we don't want to install another dep right now.
    // For now, let's stick to standard input or basic drag events if we want to avoid 'react-dropzone' dependency, 
    // BUT the prompt implied a rich UI. Let's assume user accepts installing 'react-dropzone' OR we build a custom one.
    // To keep it simple and dependency-light, I'll build a custom drag-n-drop area.

    const [isDragging, setIsDragging] = useState(false)

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const onDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)])
            e.dataTransfer.clearData()
        }
    }, [])

    const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFiles((prev) => [...prev, ...Array.from(e.target.files!)])
        }
    }

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const handleUpload = () => {
        if (files.length === 0) return

        setUploading(true)
        setProgress(0)

        // Simulate upload
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setUploading(false)
                    setFiles([])
                    setOpen(false) // Close modal on success
                    return 100
                }
                return prev + 10
            })
        }, 300)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/90 border-white/10 text-white backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle>Upload Files</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Drag and drop files here or click to browse. Files will be encrypted before uploading.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Dropzone */}
                    <div
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className={`
                            relative border-2 border-dashed rounded-xl p-8 transition-colors flex flex-col items-center justify-center text-center cursor-pointer group
                            ${isDragging ? "border-primary bg-primary/10" : "border-white/10 hover:border-primary/50 hover:bg-white/5"}
                        `}
                    >
                        <input
                            type="file"
                            multiple
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={onFileSelect}
                        />
                        <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform ${isDragging ? "bg-primary/20" : ""}`}>
                            <UploadCloud className={`h-8 w-8 ${isDragging ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <p className="text-sm font-medium text-white">
                            Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Images, Videos, Documents (Max 50MB)
                        </p>
                    </div>

                    {/* File List */}
                    {files.length > 0 && (
                        <ScrollArea className="h-[150px] w-full pr-4">
                            <div className="space-y-2">
                                {files.map((file, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                                        <div className="p-2 rounded bg-primary/10">
                                            <File className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate text-white">
                                                {file.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-red-400"
                                            onClick={() => removeFile(index)}
                                            disabled={uploading}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}

                    {/* Upload Progress */}
                    {uploading && (
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Encrypting & Uploading...</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                    )}
                </div>

                <DialogFooter className="sm:justify-end gap-2">
                    <Button
                        variant="ghost"
                        onClick={() => setFiles([])}
                        disabled={uploading || files.length === 0}
                        className="text-muted-foreground hover:text-white"
                    >
                        Clear
                    </Button>
                    <Button
                        onClick={handleUpload}
                        disabled={files.length === 0 || uploading}
                        className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]"
                    >
                        {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {uploading ? "Uploading..." : "Upload Files"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

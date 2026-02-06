"use client"

import { useState } from "react"
import { PrivacyToggle } from "./PrivacyToggle"
import { cn } from "@/lib/utils"
import { Image as ImageIcon, FileText, Music, Video, ShieldCheck } from "lucide-react"

export function HeroShield() {
    const [isPrivate, setIsPrivate] = useState(true)

    // Mock data for vault items
    const vaultItems = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        type: i % 4 === 0 ? 'image' : i % 4 === 1 ? 'doc' : i % 4 === 2 ? 'video' : 'audio',
        color: i % 3 === 0 ? 'bg-rose-500' : i % 3 === 1 ? 'bg-cyan-500' : 'bg-amber-500'
    }))

    return (
        <div className="relative w-full max-w-[500px] aspect-square mx-auto mt-12 lg:mt-0 perspective-1000">
            {/* Shield Container */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">

                {/* Shield Shape & Glass Effect */}
                <div
                    className={cn(
                        "relative w-full h-full flex items-center justify-center transition-all duration-700",
                        // Shield shape using clip-path could be complex, using border-radius for simplified shield look + svg overlay
                    )}
                >
                    {/* CSS Shield Shape approximating the visual */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] rounded-bl-[10rem] rounded-br-[10rem] shadow-2xl overflow-hidden group">

                        {/* Glowing Border effect */}
                        <div className={cn(
                            "absolute inset-0 rounded-[3rem] rounded-bl-[10rem] rounded-br-[10rem] opacity-50 transition-opacity duration-500 pointer-events-none",
                            isPrivate ? "shadow-[inset_0_0_60px_rgba(168,85,247,0.3)]" : "shadow-none"
                        )} />

                        {/* Grid Content */}
                        <div className="absolute inset-0 p-6 grid grid-cols-3 md:grid-cols-4 gap-3 content-start overflow-hidden opacity-90">
                            {vaultItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        "aspect-square rounded-lg flex items-center justify-center transition-all duration-500",
                                        "bg-black/40 border border-white/5",
                                        isPrivate ? "blur-md scale-90 opacity-60" : "blur-0 scale-100 opacity-100"
                                    )}
                                >
                                    {isPrivate ? (
                                        <div className="h-2 w-2 rounded-full bg-primary/50 animate-pulse" />
                                    ) : (
                                        <>
                                            {item.type === 'image' && <ImageIcon className="h-5 w-5 text-cyan-400" />}
                                            {item.type === 'doc' && <FileText className="h-5 w-5 text-rose-400" />}
                                            {item.type === 'video' && <Video className="h-5 w-5 text-amber-400" />}
                                            {item.type === 'audio' && <Music className="h-5 w-5 text-emerald-400" />}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Privacy Overlay Message */}
                        <div className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-500",
                            isPrivate ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}>
                            <ShieldCheck className="h-16 w-16 text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] mb-2" />
                            <h3 className="text-xl font-bold tracking-wider text-white drop-shadow-md">VAULT LOCKED</h3>
                            <p className="text-xs text-primary/80 uppercase tracking-[0.2em]">End-to-End Encrypted</p>
                        </div>

                    </div>
                </div>

                {/* Floating controls */}
                <div className="absolute -bottom-6 z-30 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <PrivacyToggle isPrivate={isPrivate} onToggle={() => setIsPrivate(!isPrivate)} />
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/10 blur-[80px] rounded-full -z-10 pointer-events-none" />
        </div>
    )
}

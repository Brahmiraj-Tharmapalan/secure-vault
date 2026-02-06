"use client"

import { Lock, Unlock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PrivacyToggleProps {
    isPrivate: boolean
    onToggle: () => void
}

export function PrivacyToggle({ isPrivate, onToggle }: PrivacyToggleProps) {
    return (
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <span className={cn(
                "text-xs font-medium transition-colors duration-300",
                !isPrivate ? "text-white" : "text-muted-foreground"
            )}>
                Visible
            </span>

            <button
                onClick={onToggle}
                className={cn(
                    "relative h-6 w-11 rounded-full transition-all duration-300 focus:outline-hidden",
                    isPrivate
                        ? "bg-primary shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                        : "bg-muted hover:bg-muted/80"
                )}
                aria-label="Toggle Privacy Mode"
            >
                <div
                    className={cn(
                        "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 flex items-center justify-center",
                        isPrivate ? "translate-x-5" : "translate-x-0"
                    )}
                >
                    {isPrivate ? (
                        <Lock className="h-3 w-3 text-primary" />
                    ) : (
                        <Unlock className="h-3 w-3 text-muted-foreground" />
                    )}
                </div>
            </button>

            <span className={cn(
                "text-xs font-medium transition-colors duration-300",
                isPrivate ? "text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "text-muted-foreground"
            )}>
                Privacy Mode
            </span>
        </div>
    )
}

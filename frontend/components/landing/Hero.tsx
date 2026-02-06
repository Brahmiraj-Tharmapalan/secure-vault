import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lock } from "lucide-react"
import { HeroShield } from "./HeroShield"

export function Hero() {
    return (
        <section className="container py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 relative z-10">
                <Badge variant="outline" className="animate-fade-in px-4 py-2 text-sm rounded-full bg-primary/10 backdrop-blur-sm border-primary/20 text-primary shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    <span className="mr-2">🎉</span> New: Enterprise-grade encryption
                </Badge>

                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-primary to-cyan-400 animate-in fade-in zoom-in duration-500 drop-shadow-sm">
                        Secure Your Digital Life with <span className="text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Confidence</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                        Advanced encryption, zero-knowledge architecture, and seamless cross-device synchronization.
                        Your privacy is our priority.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 w-full sm:w-auto">
                    <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 bg-primary hover:bg-primary/90 text-white border border-primary/20" asChild>
                        <Link href="/signup">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300" asChild>
                        <Link href="/demo">
                            View Demo <Lock className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Right Visual - Hero Shield */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-in fade-in slide-in-from-right duration-1000 delay-300">
                <HeroShield />
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true" />
        </section>
    )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lock } from "lucide-react"

export function Hero() {
    return (
        <section className="container py-24 md:py-32 lg:py-40 flex flex-col items-center text-center space-y-8">
            <Badge variant="outline" className="animate-fade-in px-4 py-2 text-sm rounded-full bg-background/50 backdrop-blur-sm border-primary/20 text-primary">
                <span className="mr-2">🎉</span> New: Enterprise-grade encryption
            </Badge>

            <div className="space-y-4 max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground animate-in fade-in zoom-in duration-500">
                    Secure Your Digital Life with <span className="text-primary">Confidence</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                    Advanced encryption, zero-knowledge architecture, and seamless cross-device synchronization.
                    Your privacy is our priority.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full" asChild>
                    <Link href="/signup">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full" asChild>
                    <Link href="/demo">
                        View Demo <Lock className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {/* Decorative gradient blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" aria-hidden="true" />
        </section>
    )
}

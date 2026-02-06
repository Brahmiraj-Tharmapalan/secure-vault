import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="container py-20 lg:py-32">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                    Ready to Secure Your Future?
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                    Join thousands of users who trust SecureVault with their most important data.
                    Start for free today.
                </p>
                <div className="pt-4">
                    <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow" asChild>
                        <Link href="/signup">Create Free Account</Link>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                    No credit card required. 14-day free trial on Pro plans.
                </p>
            </div>
        </section>
    )
}

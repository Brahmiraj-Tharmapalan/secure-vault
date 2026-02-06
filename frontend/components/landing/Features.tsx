import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Shield, Lock, Zap, RefreshCw, Key, Users } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "Bank-Grade Encryption",
        description: "AES-256 encryption ensures your data remains impossible to crack.",
    },
    {
        icon: Lock,
        title: "Zero-Knowledge",
        description: "We can't see your data. Your private key never leaves your device.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed. Access your secured files instantly.",
    },
    {
        icon: RefreshCw,
        title: "Real-time Sync",
        description: "Seamlessly sync your vault across all your devices.",
    },
    {
        icon: Key,
        title: "Password Manager",
        description: "Built-in secure password generator and storage.",
    },
    {
        icon: Users,
        title: "Secure Sharing",
        description: "Share files securely with time-limited links.",
    },
]

export function Features() {
    return (
        <section id="features" className="container py-20 bg-muted/30">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose SecureVault?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Built with security at its core, without compromising on user experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-card border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
                        <CardHeader>
                            <feature.icon className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Shield, Cloud, Tag, Share2, Key, Smartphone } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "End-to-End Encryption",
        description: "Your photos are encrypted on your device. Only you hold the keys.",
    },
    {
        icon: Cloud,
        title: "Secure Cloud Sync",
        description: "Access your encrypted vault from any device, anywhere in the world.",
    },
    {
        icon: Tag,
        title: "AI Smart Tagging",
        description: "Private on-device AI organizes your memories without compromising privacy.",
    },
    {
        icon: Share2,
        title: "Private Sharing",
        description: "Share encrypted links with time-limits and password protection.",
    },
    {
        icon: Key,
        title: "Zero-Knowledge",
        description: "We literally cannot see your data. It's technically impossible.",
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Native experience on iOS and Android with biometric lock.",
    },
]

export function Features() {
    return (
        <section id="features" className="container py-24">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
                    Why Choose SecureVault?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Built with security at its core, without compromising on user experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-primary/30 hover:-translate-y-1 group">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}


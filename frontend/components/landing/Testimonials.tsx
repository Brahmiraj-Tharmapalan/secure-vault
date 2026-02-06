import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Cybersecurity Analyst",
        content: "SecureVault is the only tool I trust with my sensitive client data. The zero-knowledge architecture is the real deal.",
        initials: "AJ",
    },
    {
        name: "Sarah Chen",
        role: "Freelance Designer",
        content: "The interface is beautiful and intuitive. I don't have to be a tech wizard to keep my files safe.",
        initials: "SC",
    },
    {
        name: "Mike Ross",
        role: "Small Business Owner",
        content: "It just works. Syncing between my laptop and phone is flawless. Highly recommended.",
        initials: "MR",
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="container py-24">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Trusted by Experts</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    See what our users have to say about their security experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                                <AvatarFallback>{testimonial.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="italic text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

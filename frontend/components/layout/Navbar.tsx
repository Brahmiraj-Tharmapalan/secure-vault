import Link from "next/link"
import { MobileNav } from "@/components/layout/MobileNav"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

const navItems = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
]

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60 px-5">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl hidden sm:inline-block tracking-tight text-white">SecureVault</span>
                        <span className="font-bold text-xl sm:hidden text-white">SV</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="hover:text-primary hover:bg-primary/10" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button className="shadow-[0_0_15px_rgba(168,85,247,0.4)] bg-primary text-white hover:bg-primary/90 rounded-full px-6" asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <MobileNav />
            </div>
        </header>
    )
}


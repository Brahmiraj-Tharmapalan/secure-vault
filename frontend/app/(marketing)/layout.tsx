import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 px-5 sm:px-10">
                {children}
            </main>
            <Footer />
        </div>
    )
}

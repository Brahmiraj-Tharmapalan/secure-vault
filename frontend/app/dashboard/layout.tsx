import { Header } from "@/components/dashboard/Header"
import { Sidebar } from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar - Desktop */}
            <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="md:pl-72 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 p-4 md:p-8 pt-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileImage, HardDrive, ShieldCheck, Upload, Plus } from "lucide-react"
import { ImageGrid } from "@/components/dashboard/ImageGrid"
import { UploadModal } from "@/components/dashboard/UploadModal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Dashboard - SecureVault",
    description: "Overview of your secure vault.",
}

// Mock Data
const mockImages = [
    {
        id: "1",
        filename: "vacation_bali_01.jpg",
        fileSize: "4.2 MB",
        uploadedAt: "2 hours ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=500",
    },
    {
        id: "2",
        filename: "project_specs_v2.png",
        fileSize: "1.8 MB",
        uploadedAt: "5 hours ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
    },
    {
        id: "3",
        filename: "family_dinner.jpg",
        fileSize: "3.5 MB",
        uploadedAt: "1 day ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=500",
    },
    {
        id: "4",
        filename: "financial_report_2025.pdf",
        fileSize: "8.1 MB",
        uploadedAt: "2 days ago",
        // No thumbnail for PDF to test fallback
    },
    {
        id: "5",
        filename: "design_system_tokens.png",
        fileSize: "245 KB",
        uploadedAt: "3 days ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=500",
    },
    {
        id: "6",
        filename: "passport_scan.jpg",
        fileSize: "1.2 MB",
        uploadedAt: "1 week ago",
        thumbnailUrl: "https://images.unsplash.com/photo-1544302672-b732292f758e?auto=format&fit=crop&q=80&w=500",
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <UploadModal>
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]">
                            <Plus className="mr-2 h-4 w-4" /> Upload New
                        </Button>
                    </UploadModal>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Storage
                        </CardTitle>
                        <HardDrive className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5.3 GB</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Encrypted Files
                        </CardTitle>
                        <ShieldCheck className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">
                            +180 new files
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Photos
                        </CardTitle>
                        <FileImage className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">892</div>
                        <p className="text-xs text-muted-foreground">
                            Last upload 2 hours ago
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Uploads
                        </CardTitle>
                        <Upload className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 this week
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Recent Files</h3>
                    <Button variant="ghost" className="text-sm text-muted-foreground hover:text-white">
                        View All
                    </Button>
                </div>

                {/* Image Grid Component */}
                <ImageGrid images={mockImages} />
            </div>
        </div>
    )
}

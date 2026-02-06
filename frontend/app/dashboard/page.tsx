import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileImage, HardDrive, ShieldCheck, Upload } from "lucide-react"

export const metadata: Metadata = {
    title: "Dashboard - SecureVault",
    description: "Overview of your secure vault.",
}

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
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
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
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
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
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
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
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

            {/* Recent Files Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white/5 border-white/10 backdrop-blur-sm text-white">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Activity Graph Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-white/5 border-white/10 backdrop-blur-sm text-white">
                    <CardHeader>
                        <CardTitle>Quick Access</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <FileImage className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">IMG_2026_{i}.jpg</p>
                                        <p className="text-xs text-muted-foreground">Encrypted • 2.4MB</p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">Just now</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

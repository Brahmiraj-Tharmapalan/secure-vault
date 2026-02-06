import { Metadata } from "next"
import { User, Shield, Bell, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Settings - SecureVault",
    description: "Manage your account settings.",
}

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <Separator className="bg-white/5" />

            <div className="grid gap-6">
                {/* Profile Section */}
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            <CardTitle>Profile</CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground">
                            Update your personal information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Display Name</Label>
                                <Input id="name" defaultValue="John Doe" className="bg-black/20 border-white/10 text-white" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="john@example.com" disabled className="bg-black/20 border-white/10 text-muted-foreground opacity-50" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 px-6 py-4">
                        <Button className="bg-primary hover:bg-primary/90 text-white">Save Changes</Button>
                    </CardFooter>
                </Card>

                {/* Security Section */}
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <CardTitle>Security</CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground">
                            Manage your account security settings.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Two-factor Authentication</Label>
                                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                            </div>
                            <Switch />
                        </div>
                        <Separator className="bg-white/10" />
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" className="bg-black/20 border-white/10" />
                        </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 px-6 py-4">
                        <Button variant="secondary" className="hover:bg-white/20">Change Password</Button>
                    </CardFooter>
                </Card>

                {/* Notifications Section */}
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-primary" />
                            <CardTitle>Notifications</CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground">
                            Configure how you receive alerts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Email Notifications</Label>
                                <p className="text-sm text-muted-foreground">Receive emails about new logins and security alerts.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

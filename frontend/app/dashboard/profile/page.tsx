import { Metadata } from "next"
import { User, Mail, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
    title: "Profile - SecureVault",
    description: "Manage your public profile.",
}

export default function ProfilePage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Profile</h2>
                <p className="text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>

            <Separator className="bg-white/5" />

            {/* Avatar Section */}
            <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer">
                    <Avatar className="h-24 w-24 border-2 border-white/10 group-hover:border-primary transition-colors">
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback className="text-2xl">SV</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="h-6 w-6 text-white" />
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-white">Profile Picture</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        JPG, GIF or PNG. 1MB max.
                    </p>
                    <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/10 hover:text-white">
                        Upload New
                    </Button>
                </div>
            </div>

            <Separator className="bg-white/5" />

            {/* Form Section */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="username" defaultValue="secure_user" className="pl-9 bg-black/20 border-white/10" />
                    </div>
                    <p className="text-xs text-muted-foreground">This is your public display name.</p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="email" defaultValue="user@example.com" className="pl-9 bg-black/20 border-white/10" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                        id="bio"
                        placeholder="Tell us a little bit about yourself"
                        className="bg-black/20 border-white/10 min-h-[100px]"
                    />
                </div>

                <div className="pt-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                        Save Profile
                    </Button>
                </div>
            </div>
        </div>
    )
}

import { Metadata } from "next"
import { Check, CreditCard, Download, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
    title: "Billing - SecureVault",
    description: "Manage billing and invoices.",
}

export default function BillingPage() {
    const invoices = [
        { id: "INV001", date: "Oct 01, 2026", amount: "$0.00", status: "Paid" },
        { id: "INV002", date: "Sep 01, 2026", amount: "$0.00", status: "Paid" },
        { id: "INV003", date: "Aug 01, 2026", amount: "$0.00", status: "Paid" },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Billing</h2>
                <p className="text-muted-foreground">
                    Manage your subscription and billing information.
                </p>
            </div>

            <Separator className="bg-white/5" />

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-linear-to-br from-primary/20 to-black border-primary/50 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Free Plan
                            <Badge className="bg-primary text-white hover:bg-primary/90">Active</Badge>
                        </CardTitle>
                        <CardDescription className="text-primary-foreground/70">
                            You are currently on the Free plan.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-baseline text-3xl font-bold">
                            $0
                            <span className="text-sm font-normal text-muted-foreground/70 ml-1">/month</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> 5GB Encrypted Storage
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> Basic Support
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> 2 Devices
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-white text-black hover:bg-gray-200">
                            <Zap className="h-4 w-4 mr-2" />
                            Upgrade to Pro
                        </Button>
                    </CardFooter>
                </Card>

                {/* Usage & Payment */}
                <div className="space-y-6">
                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader>
                            <CardTitle>Usage</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Your resource consumption this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Storage</span>
                                    <span className="text-muted-foreground">5GB / 15GB</span>
                                </div>
                                <Progress value={33} className="h-2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Bandwidth</span>
                                    <span className="text-muted-foreground">2.1GB / 50GB</span>
                                </div>
                                <Progress value={4} className="h-2" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader>
                            <CardTitle>Payment Method</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-16 bg-white/10 rounded flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium">No payment method added</p>
                                    <p className="text-sm text-muted-foreground">Add a card to upgrade.</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/10 hover:text-white">
                                Add Card
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* Invoice History */}
            <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                    <CardTitle>Invoice History</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-white/10">
                        <div className="grid grid-cols-4 bg-white/5 p-3 text-sm font-medium text-muted-foreground border-b border-white/10">
                            <div>Invoice</div>
                            <div>Date</div>
                            <div>Amount</div>
                            <div className="text-right">Status</div>
                        </div>
                        {invoices.map((inv) => (
                            <div key={inv.id} className="grid grid-cols-4 p-3 text-sm items-center hover:bg-white/5 transition-colors">
                                <div className="font-medium">{inv.id}</div>
                                <div className="text-muted-foreground">{inv.date}</div>
                                <div>{inv.amount}</div>
                                <div className="flex justify-end items-center gap-2">
                                    <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10">
                                        {inv.status}
                                    </Badge>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                                        <Download className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

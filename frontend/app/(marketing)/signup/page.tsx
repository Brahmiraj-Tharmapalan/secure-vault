import { Metadata } from "next"
import { SignUpForm } from "@/components/auth/SignUpForm"

export const metadata: Metadata = {
    title: "Sign Up - SecureVault",
    description: "Create your secure private image vault account.",
}

export default function SignUpPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full flex justify-center px-4 py-8">
                <SignUpForm />
            </div>
        </div>
    )
}

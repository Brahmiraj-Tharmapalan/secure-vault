"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    remember: z.boolean().default(false),
})

export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        // Simulate login delay
        setTimeout(() => {
            alert("Login functionality to be implemented with backend.");
        }, 1000)
    }

    return (
        <div className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]">
            <div className="flex flex-col items-center gap-2 mb-8 text-center">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white mt-2">
                    Welcome Back
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your credentials to access your secure vault.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="name@example.com"
                                            className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center justify-between">
                        <FormField
                            control={form.control}
                            name="remember"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400">
                                            Remember me
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.8)] transition-all duration-300"
                    >
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </Form>

            <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link
                    href="/signup"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    Sign up
                </Link>
            </div>
        </div>
    )
}

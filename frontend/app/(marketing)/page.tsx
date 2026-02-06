import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { FAQ } from "@/components/landing/FAQ";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <Hero />
            <Features />
            <Testimonials />
            <FAQ />
            <CTA />
        </div>
    );
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How secure is SecureVault?",
        answer: "We use military-grade AES-256 encryption. Your unique private key is generated on your device and never sent to our servers, meaning even we cannot access your data.",
    },
    {
        question: "Can I access my files offline?",
        answer: "Yes! SecureVault caches your most recently used files securely on your device, allowing you to view and edit them without an internet connection.",
    },
    {
        question: "Is there a free plan?",
        answer: "Absolutely. Our Personal plan allows you to store up to 5GB of encrypted data completely free, forever.",
    },
    {
        question: "What happens if I lose my password?",
        answer: "Because we use zero-knowledge encryption, we cannot recover your password. However, we provide a Recovery Kit upon signup that you must save securely to restore access.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="container py-24 max-w-4xl mx-auto">
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about SecureVault.</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                            <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors text-lg py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

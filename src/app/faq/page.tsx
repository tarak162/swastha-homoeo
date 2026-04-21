import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
    title: "FAQ",
    description: "Frequently asked questions about Swastha Homoeopathy.",
};

const faqs = [
    {
        id: "q1",
        question: "Is homoeopathy safe for children?",
        answer:
            "Yes, homoeopathy is completely safe for children of all ages including newborns. The remedies are gentle, natural, and free from harmful side effects, making them ideal for treating common childhood conditions like colic, teething, skin issues, and behavioural concerns.",
    },
    {
        id: "q2",
        question: "How long does homoeopathic treatment take?",
        answer:
            "Treatment duration varies depending on the condition, its severity, and how long you have had it. Acute conditions like colds or infections often improve within days. Chronic conditions like skin disorders or digestive issues may take weeks to months for lasting results.",
    },
    {
        id: "q3",
        question: "Do you offer online consultations?",
        answer:
            "Yes, all consultations at Swastha Homoeopathy are conducted online via Google Meet. Simply book your preferred slot and you will receive a meeting link by email.",
    },
    {
        id: "q4",
        question: "What should I bring to my first consultation?",
        answer:
            "For your first consultation, it helps to have any previous medical reports, test results, or prescriptions handy. Be prepared to discuss your complete health history, lifestyle, and current symptoms in detail.",
    },
    {
        id: "q5",
        question: "Is homoeopathy safe during pregnancy?",
        answer:
            "Homoeopathic remedies are generally considered safe during pregnancy as they are highly diluted and natural. Dr. Dhanalakshmi has experience treating pregnancy-related conditions like morning sickness, fatigue, and anxiety with gentle homoeopathic care.",
    },
    {
        id: "q6",
        question: "Can homoeopathy be taken alongside other medicines?",
        answer:
            "In most cases yes. Homoeopathic remedies do not typically interfere with conventional medicines. However, it is important to inform Dr. Dhanalakshmi about all medications you are currently taking so she can personalise your treatment safely.",
    },
    {
        id: "q7",
        question: "How do I reschedule or cancel my appointment?",
        answer:
            "You can easily reschedule or cancel your appointment using the link provided in your booking confirmation email. Alternatively, contact us directly on WhatsApp or phone.",
    },
];

export default function FAQPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Everything you need to know before your first visit
                </p>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible defaultValue="q1" className="w-full">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/40">
                        <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* CTA Section */}
            <div className="mt-16 rounded-lg border border-border/40 bg-muted/30 p-8 text-center">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                    Still have questions? We're here to help.
                </h2>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild size="lg">
                        <Link href="/book">Book a Consultation</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/#contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SettingsPage() {
    return (
        <div className="p-4">
            <div>
                <h1 className="font-semibold text-xl">Settings</h1>
            </div>
            <Accordion type="multiple">
                <AccordionItem value="invoice-Logo">
                    <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                    <AccordionContent>
                        We offer standard (5-7 days), express (2-3 days), and overnight
                        shipping. Free shipping on international orders.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Signature-invoice">
                    <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                    <AccordionContent>
                        We offer standard (5-7 days), express (2-3 days), and overnight
                        shipping. Free shipping on international orders.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
// 4:4
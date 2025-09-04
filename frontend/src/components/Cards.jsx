import { Truck, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Lightning Fast Delivery",
    description:
      "Get your orders delivered within 24-48 hours with our premium shipping service.",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
    title: "Unbeatable Prices",
    description:
      "Enjoy competitive pricing with exclusive deals and seasonal discounts on all products.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "100% Secure Shopping",
    description:
      "Your data and payments are protected with bank-level security and encryption.",
  },
];

export default function WhyShop() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Why Shop With Us?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Experience the difference with our hand-curated quality and service.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹25000",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Social Media Management (2 platforms)",
      "10 Posts per month",
      "Basic Analytics",
      "Monthly Strategy Call",
      "Content Calendar",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹50000",
    period: "/month",
    description: "For brands ready to scale their presence",
    features: [
      "Social Media Management (4 platforms)",
      "25 Posts + 10 Reels per month",
      "Advanced Analytics & Reporting",
      "Weekly Strategy Sessions",
      "Performance Marketing ($500 ad spend)",
      "Content Creation & Design",
    ],
    color: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-service solutions for established brands",
    features: [
      "Unlimited Platform Management",
      "Unlimited Content Creation",
      "Dedicated Account Manager",
      "Custom Strategy & Campaigns",
      "Performance Marketing (Custom budget)",
      "Brand Development",
      "24/7 Priority Support",
    ],
    color: "from-orange-500 to-red-500",
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-slate-900 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 tracking-wider uppercase text-sm">
            Pricing
          </span>
          <h2 className="text-5xl md:text-6xl text-slate-900 mt-4">
            Flexible Plans for Every Brand
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                plan.popular
                  ? "border-purple-500 border-2"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl text-slate-900">{plan.price}</span>
                <span className="text-slate-600">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 rounded-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

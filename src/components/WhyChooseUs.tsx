import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Lightbulb,
  Calendar,
  BarChart,
  Sparkles,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategic + Creative Balance",
    description: "We merge data-driven insights with bold creative execution.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Calendar,
    title: "Consistent Monthly Support",
    description: "Reliable, ongoing partnership for sustained growth.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart,
    title: "Results with Data Transparency",
    description: "Clear reporting and measurable outcomes every month.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Unique Content Approach",
    description: "Stand out with original storytelling that resonates.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Reliable, Professional, Dedicated Team",
    description: "We treat your brand like our own.",
    color: "from-red-500 to-pink-500",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl text-white mt-4">
            Why Brands Trust Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
